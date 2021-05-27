import React from "react";

const UserMenu = ({ open, func }) => {
  return (
    <div className={open ? "navbar__user_menu active" : "navbar__user_menu"}>
      <div className="navbar__user_content">
        <i className="fas fa-times" onClick={func}></i>
        <ul className="navbar__user_list">
          <li className="navbar__user_item">Account</li>
          <li className="navbar__user_item">Shops</li>
          <li className="navbar__user_item">Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
