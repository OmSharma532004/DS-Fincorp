import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

export const SideMenu = ({ toggleMenu }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isLoanHovered, setIsLoanHovered] = useState(false);

  return (
    <>
      <div
        className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm"
      >
        <div onClick={() => toggleMenu()}>
          <IoCloseOutline style={{ fontSize:"2rem"}} />
        </div>
        <div className="text-white w-11/12 min-h-[70%] max-w-[300px] -mt-[300px] rounded-lg border border-richblack-400 bg-richblack-800">
          <ul className=" ml-8 flex-row">
            <li>
              <Link to={"/"}>
                <p className="text-xl my-4">Home</p>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <p className="my-4 text-xl">About</p>
              </Link>
            </li>
            <li>
              <div
                className="group flex "
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
              >
                <p className="text-xl cursor-pointer">
                  Card
                 
                </p>
                <ul
                    className={`left-full bg-white text-black py-2 rounded-md opacity-0 transition-opacity duration-300 ${
                      isCardHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <li>
                      <Link to="/credit-card">Credit Card</Link>
                    </li>
                    <li>
                      <Link to="/debit-card">Debit Card</Link>
                    </li>
                    {/* Add more card options as needed */}
                  </ul>
              </div>
            </li>
            <li>
              <div
                className="group flex "
                onMouseEnter={() => setIsLoanHovered(true)}
                onMouseLeave={() => setIsLoanHovered(false)}
              >
                <p className="text-xl cursor-pointer">
                  Loan
                  
                </p>
                <ul
                    className={`left-full bg-white text-black py-2 rounded-md opacity-0 transition-opacity duration-300 ${
                      isLoanHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <li>
                      <Link to="/loan/personal-loan">Personal Loan</Link>
                    </li>
                    <li>
                      <Link to="/loan/home-loan">Home Loan</Link>
                    </li>
                    <li>
                      <Link to="/loan/education-loan">Education Loan</Link>
                    </li>
                    {/* Add more loan options as needed */}
                  </ul>
              </div>
            </li>
            <li>
              <Link to={"/contact"}>
                <p className="my-4 text-xl">Contact</p>
              </Link>
            </li>
            <li>
              <Link to={"/services"}>
                <p className="my-4 text-xl">Services</p>
              </Link>
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>
    </>
  );
};
