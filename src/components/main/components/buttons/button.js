import React from "react";

import "./button.scss";

const Button = ({ text1, text2, clname, clname2, clname3 }) => {
  return (
    <button className={clname ? `button ${clname}` : "button"}>
      <span className={clname2 ? `button_text1 ${clname2}` : "button_text1"}>
        {text1}
      </span>{" "}
      <span className={clname3 ? `button_text2 ${clname3}` : "button_text2"}>
        {text2}
      </span>
    </button>
  );
};

export default Button;
