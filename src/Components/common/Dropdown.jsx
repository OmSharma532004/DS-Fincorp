import React, { useState } from 'react';
import { AiOutlineEllipsis } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({details,heading}) => {
  
  const [expanded, setExpanded] = useState(false);

  const toggleDropdown = () => {
    setExpanded(!expanded)
  };

  return (
    <div>
       <div className="   bg-gradient-to-r from-zinc-600 to-zinc-700   border-black rounded-xl p-1 text-yellow-300 w-[100%] flex flex-col flex-wrap   ">
        <div onClick={() => toggleDropdown()}  className='  flex flex-row justify-between items-center '>
        <div className="   font-semibold  text-xl">
            <h1>{heading}</h1>
        
          
        </div>
        <div>   <RiArrowDropDownLine style={{fontSize:"2rem"}} /></div>
          </div>
          <div className=' text-white transition-all duration-200 text-l w-[100%] mt-4 mx-auto '>
          {expanded && (
            <div className="  pb-4">
                <p>{details}</p>
        
             
            </div>
          )}
          </div>

        </div>
    </div>
  );
};

export default Dropdown;
