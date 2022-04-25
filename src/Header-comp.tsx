import React from "react";
import menu from "./imgs/menu.png";
import account from "./imgs/menu.png";

const Header: React.VFC = () => {
  return (
    <div className="header">
      <img className="icon" src={menu} />
      <h4>taitoru </h4>
      <img className="icon" src={account} />
    </div>
  );
};

export default Header;
