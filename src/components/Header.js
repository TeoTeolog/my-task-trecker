import React from "react";
import Button from "./Button";

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button
        text={props.isShowAdd ? "Close" : "Add"}
        color={props.isShowAdd ? "red" : "green"}
        onClick={props.onToggle}
      />
    </header>
  );
};

Header.defaultProps = {
  test: {},
  title: "defTitle",
};

export default Header;
