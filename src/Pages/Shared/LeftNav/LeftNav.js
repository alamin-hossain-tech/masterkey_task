import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./LeftNav.css";

const LeftNav = () => {
  return (
    <div>
      <div className="w-64 py-5 shadow-lg h-screen text-center">
        {/* nav logo  */}
        <div className="logo flex gap-3 pl-12 items-center">
          <img src="https://i.ibb.co/KhMCNvX/logo.png" alt="" />
          <h2>MK Sounds</h2>
        </div>

        {/* Menu List  */}

        <ul className="flex flex-col gap-8 pt-12">
          <li className="menu-link pl-12">
            <NavLink to="/" className="flex items-center gap-5">
              <img src="https://i.ibb.co/gJGs6Qp/home.png" alt="" /> Home
            </NavLink>
          </li>
          <li className="menu-link pl-12">
            <NavLink to="/explore" className="flex items-center gap-5">
              <img src="https://i.ibb.co/D9fCPx9/explore.png" alt="" /> Explore
            </NavLink>
          </li>
          <li className="menu-link pl-12">
            <NavLink to="/saved" className="flex items-center gap-5">
              <img src="https://i.ibb.co/JsWCwCL/saved.png" alt="" /> Saved
            </NavLink>
          </li>
          <li className="menu-link pl-12">
            <NavLink to="/cart" className="flex items-center gap-5">
              <img src="https://i.ibb.co/m6c9Wp6/cart.png" alt="" /> Cart
            </NavLink>
          </li>
          <li className="menu-link pl-12">
            <NavLink to="/selling" className="flex items-center gap-5">
              <img src="https://i.ibb.co/f0gD8Jm/selling.png" alt="" /> Selling
            </NavLink>
          </li>
          <li className="menu-link pl-12">
            <NavLink to="/profile" className="flex items-center gap-5">
              <img src="https://i.ibb.co/nmTsSp5/profile.png" alt="" /> Profile
            </NavLink>
          </li>
          <li className="menu-link pl-12">
            <NavLink to="/history" className="flex items-center gap-5">
              <img src="https://i.ibb.co/4dkd8NR/history.png" alt="" />
              History
            </NavLink>
          </li>
          <li className="menu-link pl-12">
            <NavLink to="/contact" className="flex items-center gap-5">
              <img src="https://i.ibb.co/DfhrGrR/contact-us.png" alt="" />
              Contact us
            </NavLink>
          </li>
          <li className="menu-link pl-12">
            <NavLink to="/setting" className="flex items-center gap-5">
              <img src="https://i.ibb.co/YP1n1Sx/setting.png" alt="" />
              Setting
            </NavLink>
          </li>
        </ul>

        {/* help section  */}

        <div className="px-4 pt-12">
          <div className="bg-[url('https://i.ibb.co/jH9dPTJ/Frame-2.png')] bg-cover text-center p-5 text-white">
            <img
              className="mx-auto"
              src="https://i.ibb.co/z6jzwFT/nav-button.png"
              alt=""
            />
            <h2 className="text-2xl font-semibold">Need Help</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
