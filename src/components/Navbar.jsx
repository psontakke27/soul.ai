import React from "react";
import "./Navbar.css";

function Navbar({toggleSidebar}){
    return(
     <nav className="navbar">
        <img
        src="https://media.licdn.com/dms/image/v2/D5622AQF-e_VAGCWHMA/feedshare-shrink_2048_1536/B56ZZW0rooGcAs-/0/1745213373591?e=1754524800&v=beta&t=pSEV_lbC_GlepKPkITm1cd2ERWFxlxcfu_Voq0axxu8"
        alt="Soul AI Logo"
        className="logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        alt="Menu"
        className="hamburger"
        onClick={toggleSidebar}
      />

     </nav>
    );
};
export default Navbar;