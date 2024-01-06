import React, { useState } from 'react';
import { AiOutlineEllipsis } from "react-icons/ai";

const Dropdown = ({details,heading}) => {
  
  const [expanded, setExpanded] = useState(false);

  const toggleDropdown = () => {
    setExpanded(!expanded)
  };

  return (
    <div>
       <div  className="  bg-white border-4 border-black rounded-xl p-1 text-black w-[100%] flex flex-col flex-wrap   transition-all duration-300 ">
          <div onClick={() => toggleDropdown()} className="   font-semibold  text-xl">
            <h1>{heading}</h1>
            <AiOutlineEllipsis style={{ fontSize:"3rem" }} />
          </div>
          <div className=' text-l w-[100%] mx-auto '>
          {expanded && (
            <div className=" pb-4">
                <p>{details}</p>
        
             
            </div>
          )}
          </div>

        </div>
    </div>
  );
};

export default Dropdown;
