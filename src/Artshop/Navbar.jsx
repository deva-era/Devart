import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [side_bar, setside_bar] = useState();
  var update = () => {
    setside_bar(!side_bar);
  };
  return (
    <>
      <nav className="max-md:flex-col  flex justify-between items-center bg-transparent backdrop-blur-sm">
        <div className="max-md:flex max-md:justify-between max-md:w-11/12 max-md:mx-auto ">
          <div className="">
            <img src="./artshop/artlogo.png" alt="logo" className="h-20 " />
          </div>
          <button className="md:hidden hover:text-cyan-500" onClick={update}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div
          className={`menu ${
            side_bar ? "max-md:block" : "max-md:hidden"
          } mr-6 max-md:flex-col `}
        >
          <ul className="flex gap-8 max-md:flex-col">
            <span>
              <Link to="/" className="header_menu">
                Home
              </Link>
            </span>
            <span>
              <Link to="/art" className="header_menu ">
                {" "}
                Explore{" "}
              </Link>
            </span>
            <span>
              <Link to="/contact" className="header_menu">
                {" "}
                Contact{" "}
              </Link>
            </span>
            <span>
              <Link to="/about" className="header_menu">
                {" "}
                About{" "}
              </Link>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
