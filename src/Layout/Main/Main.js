import React from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "../../Pages/Shared/LeftNav/LeftNav";

const Main = () => {
  return (
    <div className="flex">
      <LeftNav></LeftNav>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
