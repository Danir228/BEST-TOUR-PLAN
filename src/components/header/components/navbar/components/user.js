import React, { useState } from "react";
import UserMenu from "./user-menu";

import stroke from "../../images/stroke.svg";
import avatar from "../../images/avatar.svg";

const User = () => {

    const [open, openMenu] = useState('');

    const openFolder = () => {
        openMenu(!open)
    }

  return (
    <>
      <div className="navbar__user">
        <img src={avatar} alt="avatar" className="navbar__user_avatar" />
        <strong className="navbar__user_name">Nathan</strong>
        <img src={stroke} alt="user-menu" className="navbar__user_arrow" onClick={openFolder} />
      </div>
      <UserMenu open={open} func={openFolder}/>
    </>
  );
};

export default User;
