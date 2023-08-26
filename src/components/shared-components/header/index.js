import React from "react";
import logo from "../../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#164B60] py-3">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/main/vr-corner">
            <img src={logo} className="logo" alt="" />
          </Link>

          <div className="menu flex justify-end items-center gap-5">
            <NavLink to="/main/vr-corner" className="text-[#fff]">
              VR CORNER
            </NavLink>
            <NavLink to="/main/vr-education" className="text-[#fff]">
              VR Education Hub
            </NavLink>
            <NavLink to="/main/community" className="text-[#fff]">
              Community
            </NavLink>
            <NavLink to="/main/vr-career" className="text-[#fff]">
              VR Career Hub
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
