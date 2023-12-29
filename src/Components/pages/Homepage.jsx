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
            <section className="min-h-screen">
                <div className="max-w-maxContent w-11/12">
                <div className="flex  ml-[100px]  mt-[100px]  text-white">
                <div className=" mx-auto">
                    <h1 className= " mt-4 text-center text-5xl" ><b className=" text-yellow-300">You'll never worry</b> <br></br>about money again</h1>
                    <p className=" mt-7 text-gray-300 font-extralight text-xl  w-[400px] ">MyMoneyMantra is your one-stop destination to search for the best Home Loans, Personal Loans and Credit Cards in India. Since 1989, more than 50 lakh customers have fulfilled their dreams with us. Our network of 100+ banks and NBFCs promise most affordable and suitable finance deal for you.</p>
                </div>
                <div>
                    <video src={video} autoPlay loop  width={700}></video>
                </div>


            </div>
            {/* ratings and all */}
            <div className="relative mt-[100px] ">
                <ul className=" ml-[200px]  flex justify-between items-center"> 
                <li className="text-center " >
                <FaRegFaceSmileBeam className="ml-9" style={{ fontSize: '4em', color: 'yellow' }} />
                <h2 className=" text-2xl mt-4">50000+</h2>
                <p className="text-xl"> Happy Customers</p>
                </li>
                <li className=" text-center" >
                <TiContacts className="ml-14" style={{ fontSize: '4em', color: 'yellow'  }} />
                <h2 className=" text-2xl mt-4">5000+</h2>
                <p className="text-xl "> Relationship Managers</p>
                </li>
                <li className="text-center " >
                <CiBank style={{ fontSize: '4em', color: 'yellow'  }} />
                <h2 className=" text-2xl mt-4">50+</h2>
                <p className="text-xl text-center"> Banks</p>
                </li>
                <li className=" text-center" >
                <TbGrowth className="ml-9" style={{ fontSize: '4em', color: 'yellow'  }} />
                <h2 className=" text-2xl mt-4">50000+</h2>
                <p className="text-xl"> Happy Customers</p>
                </li>
                </ul>

            </div>
                </div>
        

         
            </section>
            {/* section 2 */}
            <section>
                <div className=" relative min-h-screen bg-white">
                    <img src={features}></img>
                <div class=" absolute top-[-90%]  right-[40%] triangle"></div>

                </div>
            </section>
        </div>
        </>
    )


}