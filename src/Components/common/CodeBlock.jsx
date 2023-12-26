import React from 'react'
import CTAButton from './CTAButton'
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor
}) => {

    
  return (
    <div className={`flex ${position} my-20 justify-between gap-10 flex-wrap `}>
      
   

     <div className=' h-fit  flex flex-row text-10[px] w-[100%] py-3 lg:w-[500px] glass   '> 
      

      

        <div  className={`  w-[90%] flex text-4xl flex-col gap-2 font-bold font-mono  text-blue-500 pr-2 relative`}>
            
            <div></div>
        
         <div className='z-10' >
         <TypeAnimation className='z-10'
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
           
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"block",
                    overflowX:"hidden",
                    fontSize:"40px",
                }
            }
            omitDeletionAnimation={true}
           />
         </div>
        </div>

     </div>



    </div>
    
  )
}

export default CodeBlocks