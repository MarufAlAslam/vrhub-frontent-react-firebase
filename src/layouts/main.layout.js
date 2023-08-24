import React from "react";
import Header from "../components/shared-components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared-components/footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
