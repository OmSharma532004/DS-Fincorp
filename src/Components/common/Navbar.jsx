import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../data/Homepage/dsimage.png"
import HighlightText from "./HighLightText"
import CodeBlocks from "./CodeBlock";
import {
    FaRegFaceSmileBeam,
    FaBars,
    FaHome,
    FaInfoCircle,
    FaPhoneAlt,
  } from "react-icons/fa";

  import { SideMenu } from "./SideMenu";

export const Navbar =()=>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
        <nav>
            {
                isMenuOpen?(
                    <>
                    <SideMenu toggleMenu={toggleMenu}/>
                    </>

                ):(
                    <></>

                )
            }
                
  
        <div className=" navbar border-b-[#2C333F] p-4  relative  text-yellow-300 w-screen ">
            <ul className=" flex">
                <li><div onClick={()=>{
                    toggleMenu()
                   
                }} className="toggle">
                    <FaBars style={{ fontSize:"2rem"}}/>
                </div></li>
                <li className=" logo ml-4 font-bold"><Link to={"/"}>
                    {/* <img src={logo} width={200} height={50}></img> */}
                    <h1 className=" text-white text-3xl font-light">DS FINCORP</h1>
                    </Link></li>

                    <li><Link to={"/"}><p className=" home absolute left-[40%] text-xl">Home</p></Link></li>
                    <li><Link to={"/about"}><p className=" about absolute left-[50%] text-xl">About</p></Link></li>
                    <li><Link to={"/contact"}><p className=" contact absolute left-[60%] text-xl">Contact</p></Link></li>
                

            </ul>

        </div>
        </nav>
       


        </>
    )
}