import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../data/Homepage/dsimage.png";
import { FaChevronDown, FaBars } from "react-icons/fa";

import { SideMenu } from "./SideMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoanHovered, setIsLoanHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        {isMenuOpen && <SideMenu toggleMenu={toggleMenu} />}

        <div className="navbar border-b-[#2C333F] p-4 relative text-yellow-300 w-screen ">
          <ul className="">
            <li>
              <div
                onClick={toggleMenu}
                className="toggle absolute left-[2%]"
              >
                <FaBars style={{ fontSize: "2rem" }} />
              </div>
            </li>
          </ul>
          <ul
            className="flex navbar-2 flex-wrap flex-row justify-around items-center relative"
          >
            <div className="logo ml-4 font-bold">
              <Link to={"/"}>
                <h1 className="text-white text-3xl font-bold">DS FINCORP</h1>
              </Link>
            </div>

            <li>
              <Link to={"/"}>
                <p className="home text-xl">Home</p>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <p className="about text-xl">About</p>
              </Link>
            </li>
            <li
              className="relative group"
              onMouseLeave={() => setIsCardHovered(false)}
            >
              <div className="flex ">
                <p
                  onMouseEnter={() => setIsCardHovered(true)}
                  className="text-xl cursor-pointer hover:text-white "
                >
                  Card
                </p>
                <div className=" mt-2 ml-2">
                  <FaChevronDown />
                </div>
              </div>

              <ul
                className={`absolute top-full left-0 bg-white text-xl w-[300px] flex flex-col gap-4  flex-wrap pl-2 text-black py-2 rounded-md opacity-0 transition-opacity duration-300 ${
                  isCardHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <li>
                  <Link to="/credit-card">Credit Card</Link>
                </li>
                <li>
                  <Link to="/debit-card">Debit Card</Link>
                </li>
                <li>
                  <Link to="/visa-card">Visa </Link>
                </li>
              </ul>
            </li>
            <li
              className="relative group"
              onMouseLeave={() => setIsLoanHovered(false)}
            >
              <div className="flex ">
                <p
                  onMouseEnter={() => setIsLoanHovered(true)}
                  className="text-xl cursor-pointer hover:text-white "
                >
                  Loan
                </p>
                <div className=" mt-2 ml-2">
                  <FaChevronDown />
                </div>
              </div>

              <ul
                className={`absolute top-full left-0 bg-white  text-xl w-[300px] pl-2 flex flex-col gap-4  flex-wrap  text-black py-2 rounded-md opacity-0 transition-opacity duration-300 ${
                  isLoanHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <li>
                  <Link to="/loan/personal-loan">Personal Loan</Link>
                </li>
                <li>
                  <Link to="/home-loan">Home Loan</Link>
                </li>
                <li>
                  <Link to="/education-loan">Education Loan</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/contact"}>
                <p className="contact text-xl">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
