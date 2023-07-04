import { useState, useCallback } from "react";

const useHttp = (domainURL) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      { method = "GET", body = null, headers = {} } = {
        method: "GET",
        body: null,
        headers: {},
      }
    ) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }

        const response = await fetch(domainURL + url, {
          method,
          body,
          headers,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так");
        }

        setLoading(false);

        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        console.log("request error:", e);
        throw e;
      }
    },
    [domainURL]
  );

  const clearError = useCallback(() => setError(null), []);
  return { loading, request, error, clearError };
};

export default useHttp;
