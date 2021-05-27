import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Main from "../main/main";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
