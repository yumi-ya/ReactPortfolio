// import * as React from "react";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.VFC = () => {
  return (
    <div className="footer">
      {/* <img className="icon" src={menu} alt=""/> */}
      <TwitterIcon className="twitter" />
      <div>©︎YagiWorks 2021 All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
