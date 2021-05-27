import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Loader from "../loader/loader";
import Main from "../main/main";

import "./app.scss";

const App = () => {
  const [Spinner, HandleSpinner] = useState(true);

  const Loading = () => {
    setTimeout(() => {
      HandleSpinner(false);
    }, 3000);
    if (Spinner) {
      return <Loader />;
    } else {
      return;
    }
  };
  return (
    <>
      {Loading()}
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
