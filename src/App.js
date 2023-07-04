import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import useHttp from "./hoooks/useHttp";

function App() {
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);
  const { request } = useHttp("http://localhost:5000/");

  const deleteTask = async (id) => {
    await request(`tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskFromServer = await request(`tasks/${id}`);
    await request(`tasks/${id}`, {
      method: "PUT",
      body: { ...taskFromServer, reminder: !taskFromServer.reminder },
    });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = async (task) => {
    const res = await request("tasks", {
      method: "POST",
      body: task,
    });

    const newTask = res;
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    const getTasksFromServer = async () => {
      const fetchedTasks = await request("tasks");
      setTasks(fetchedTasks);
    };

    getTasksFromServer();
  }, [request]);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  onToggle={() => setIsShowAdd(!isShowAdd)}
                  isShowAdd={isShowAdd}
                />
                {isShowAdd && <AddTask onAdd={addTask} />}
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
