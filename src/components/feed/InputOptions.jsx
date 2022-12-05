import React from "react";
import Style from "./Feed.module.css";
const InputOptions = ({ Icon, color, title }) => {
  return (
    <div className={Style.inputOption}>
      {Icon && <Icon style={{ color: color }} />}
      <h4>{title}</h4>
    </div>
  );
};
export default InputOptions;
