import React from "react";
import video from "../data/Homepage/home.mp4"
import features from "../data/Homepage/feature-section1-dottedrows.png"
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { CiBank } from "react-icons/ci";
import { TbGrowth } from "react-icons/tb";


export const Homepage=()=>{
    return(
        <>
        <div>
            {/* section-1 */}
            <section className="min-h-screen bg-gradient-to-r from-zinc-700 to-zinc-900 h-auto">
                <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
                <div className="flex flex-wrap flex-row homepage-1 gap-[100px] justify-center items-center mx-auto mt-[100px]  text-white">
                <div className="mx-auto">
                    <h1 className= " mt-4 text-center text-5xl" ><b className=" text-yellow-300">You'll never worry</b> <br></br>about money again</h1>
                    <p className=" para-1 mt-7  text-gray-300 font-extralight text-xl  max-w-[400px] ">MyMoneyMantra is your one-stop destination to search for the best Home Loans, Personal Loans and Credit Cards in India. Since 1989, more than 50 lakh customers have fulfilled their dreams with us. Our network of 100+ banks and NBFCs promise most affordable and suitable finance deal for you.</p>
                </div>
                <div className=" mx-auto min-w-[300px] max-w-[500px]">
                    <video  src={video} autoPlay loop  ></video>
                </div>
                
                


            </div>
            {/* ratings and all */}
            <div className=" homepage-2 mx-auto  mt-[100px] mb-5">
  <ul className="flex flex-row flex-wrap  gap-[30px] justify-center items-center">
    <li className="text-center mt-2 w-[150px]">
      <FaRegFaceSmileBeam style={{ fontSize: '2em', color: 'yellow', margin: 'auto' }} />
      <h2 className="text-2xl mt-4">50000+</h2>
      <p className="text-xl">Happy Customers</p>
    </li>
    <li className="text-center mt-2 w-[150px]">
      <TiContacts style={{ fontSize: '2em', color: 'yellow', margin: 'auto' }} />
      <h2 className="text-2xl mt-4">5000+</h2>
      <p className="text-xl">Relationship Managers</p>
    </li>
    <li className="text-center mt-2 bank w-[150px]">
      <CiBank style={{ fontSize: '2em', color: 'yellow', margin: 'auto' }} />
      <h2 className="text-2xl mt-4">50+</h2>
      <p className="text-xl text-center">Banks</p>
    </li>
    <li className="text-center mt-2 w-[150px]">
      <TbGrowth style={{ fontSize: '2em', color: 'yellow', margin: 'auto' }} />
      <h2 className="text-2xl mt-4">50000+</h2>
      <p className="text-xl">Happy Customers</p>
    </li>
  </ul>


</div>




                </div>
        

         
            </section>
            {/* section 2 */}
            <section>
                <div className=" relative min-h-screen bg-white">
                    <img src={features}></img>
                {/* <div class=" absolute top-[-87%]  right-[40%] triangle"></div> */}

                </div>
            </section>
        </div>
        </>
    )


}