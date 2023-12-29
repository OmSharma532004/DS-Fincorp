import React from "react";
import { Link } from "react-router-dom";
import logo from "../data/Homepage/dsimage.png"
import HighlightText from "./HighLightText"
import CodeBlocks from "./CodeBlock";

export const Navbar =()=>{

    return(
        <>
        <div className=" border-b-[#2C333F] p-4  relative  text-yellow-300 w-screen ">
            <ul className=" flex">
                <li className=" ml-4 font-bold"><Link to={"/"}>
                    {/* <img src={logo} width={200} height={50}></img> */}
                    <h1 className=" text-white text-3xl font-light">DS FINCORP</h1>
                    </Link></li>

                    <li><Link to={"/"}><p className=" absolute left-[40%] text-xl">Home</p></Link></li>
                    <li><Link to={"/about"}><p className=" absolute left-[50%] text-xl">About</p></Link></li>
                    <li><Link to={"/contact"}><p className=" absolute left-[60%] text-xl">Contact</p></Link></li>
                

            </ul>

        </div>
        </>
    )
}