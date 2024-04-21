import React from "react";
import "./../Button.css";
const Button = ({ title, styling }) => {
  // const { title, styling } = props;

  return <button className={styling}>{title}</button>;
};

export default Button;
