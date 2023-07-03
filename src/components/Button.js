import React from "react";

const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className="btn"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: "defBtnTittle",
  onClick: (e) => {
    console.log(e);
  },
  color: "steelblue",
};

export default Button;
