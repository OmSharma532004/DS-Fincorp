import React from "react";
import { Link } from "react-router-dom";

export const SideMenu= ({toggleMenu})=>{
return(
    <>
    <div onClick={({})=>{
       toggleMenu();
    }} className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
                <div className="text-white my-10  w-11/12 max-w-[300px] rounded-lg border border-richblack-400 bg-richblack-800">
           <ul className="  items-center justify-center ml-[120px] flex-row">
           <li><Link to={"/"}><p className="text-xl my-4">Home</p></Link></li>
                    <li><Link to={"/about"}><p className=" my-4  text-xl">About</p></Link></li>
                    <li><Link to={"/contact"}><p className=" my-4 text-xl">Contact</p></Link></li>
           </ul>
                   
                </div>
                </div>
    
    </>
)

}