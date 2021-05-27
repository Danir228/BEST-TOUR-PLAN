import React from "react";
import Navbar from "./components/navbar/navbar";
import NavbarTop from "./components/navbar-top/navbar-top";
import NavbarBottom from "./components/navbar-bottom/navbar-bottom";

const Header = () => {
  return (
    <header>
      <NavbarTop />
      <Navbar />
      <NavbarBottom />
    </header>
  );
};

export default Header;
