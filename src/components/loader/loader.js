import React from "react";

import "./loader.scss";

import loader_image from "./images/loader.gif";

const Loader = () => {
    const Height = window.innerHeight + 'px';
  return (
    <div className="loader" style={{height: `${Height}`}}>
      <img className="loader__spinner" src={loader_image} />
      <strong className="loader__text">Идет загрузка...</strong>
    </div>
  );
};

export default Loader;
