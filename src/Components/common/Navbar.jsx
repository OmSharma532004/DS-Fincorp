import React from "react";
import { Link } from "react-router-dom";
import logo from "../data/Homepage/dsimage.png"
import HighlightText from "./HighLightText"
import CodeBlocks from "./CodeBlock";

export const Navbar =()=>{

    return(
        <>
        <div className=" border-b-[#2C333F] p-4  relative text-blue-400 w-screen ">
            <ul className=" flex">
                <li className=" ml-4 font-bold"><Link to={"/"}>
                    <img src={logo} width={200} height={50}></img>
                    {/* <h1 className="text-3xl">DS FINCORP</h1> */}
                    </Link></li>

                    <li><Link to={"/"}><b className=" absolute left-[40%] text-xl">Home</b></Link></li>
                    <li><Link to={"/about"}><b className=" absolute left-[50%] text-xl">About</b></Link></li>
                    <li><Link to={"/contact"}><b className=" absolute left-[60%] text-xl">Contact</b></Link></li>
                    <li className="absolute text-4xl top-[-5%] left-[38%]">                    <CodeBlocks 
                position={"lg:flex-row"}
                codeblock={`You Grow With Us`}
                codeColor={"blue-500"}
                backgroudGradient={"grad"}
            /></li>

            </ul>

        </div>
        </>
    )
}