import React from "react";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";

const LoginMain = () => {
  return (
    <div className="py-[50px] w-full">
      <div className="container">
        <div className="form-container">
          <div className="text-center bg-[#164B60] p-5 mb-5">
            <img src={logo} className="logo m-auto" alt="" />
          </div>
          <form action="" className="form">
            <div className="mb-[30px]">
              <label htmlFor="email" className="block mb-[10px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="false"
                className="w-full border-[1px] border-[#164B60] rounded-[5px] p-[10px] outline-none focus:border-[#4FC0D0]"
              />
            </div>
            <div className="mb-[30px]">
              <label htmlFor="password" className="block mb-[10px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="false"
                className="w-full border-[1px] border-[#164B60] rounded-[5px] p-[10px] outline-none focus:border-[#4FC0D0]"
              />
            </div>
            <div className="mb-[30px]">
              <button
                type="submit"
                className="bg-[#164B60] text-[#fff] p-[15px] text-xl block rounded-[5px] w-full"
              >
                Login
              </button>
            </div>

            <div className="text-center">
              Need an Account? &nbsp;
              <Link to="/signup" className="text-[#164B60]">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
