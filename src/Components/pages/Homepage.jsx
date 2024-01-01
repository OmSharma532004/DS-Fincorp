import React from "react";
import video from "../data/Homepage/home.mp4"
import features from "../data/Homepage/feature-section1-dottedrows.png"
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { CiBank } from "react-icons/ci";
import { TbGrowth } from "react-icons/tb";
import Slider from "../Homepage/Slider";
import CreditScore from "../Homepage/CreditScore";
import { MdDone } from "react-icons/md";
import credit from "../data/Homepage/credit.jpeg"
import { Link } from "react-router-dom";


export const Homepage=()=>{
    return(
        <>
        <div>
            {/* section-1 */}
            <section className="min-h-screen bg-gradient-to-r from-zinc-700 to-zinc-900 h-auto">
                <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
                <div className="flex flex-wrap flex-row homepage-1 gap-[100px] justify-center items-center mx-auto mt-[100px]  text-white">
                <div className="mx-auto">
                    <h1 className= " mt-4 text-center text-3xl" ><b className=" text-yellow-300">Bid farewell to financial stress</b> <br></br>a worry-free future awaits you.</h1>
                    <p className="para-1 mt-7 text-gray-300 font-extralight mx-auto text-xl max-w-[400px] ">
  DS Fincorp is your ultimate destination to explore top-tier solutions for Home Loans, Personal Loans, and Credit Cards in India. Since our establishment in 1989, over 50 lakh customers have seen their aspirations come to life with DS Fincorp. Our extensive network, comprising 100+ banks and NBFCs, ensures a commitment to providing the most economical and fitting financial solutions tailored just for you.
</p>
                </div>
                <div className=" mx-auto min-w-[300px] max-w-[500px]">
                    <video  src={video}  muted autoPlay loop  ></video>
                </div>
                
                


            </div>
            {/* ratings and all */}
            <div className=" homepage-2  flex flex-col flex-wrap items-center justify-center mt-[100px] mb-5">
  <ul className="flex flex-row flex-wrap lg:gap-[70px] mx-auto  justify-around  items-center">
    <li className="text-center font-extralight  mt-2 w-[150px]">
      <FaRegFaceSmileBeam style={{ fontSize: '2em', color: 'yellow', margin: 'auto' }} />
      <h2 className="text-2xl mt-4">50000+</h2>
      <p className="text-xl">Happy Customers</p>
    </li>
    <li className="text-center  font-extralight  mt-2 w-[150px]">
      <TiContacts style={{ fontSize: '2em', color: 'yellow', margin: 'auto' }} />
      <h2 className="text-2xl mt-4">5000+</h2>
      <p className="text-xl">Relationship Managers</p>
    </li>
    <li className="text-center font-extralight -mt-4 bank w-[150px]">
      <CiBank style={{ fontSize: '2em', color: 'yellow', margin: 'auto' }} />
      <h2 className="text-2xl mt-4">50+</h2>
      <p className="text-xl text-center">Banks</p>
    </li>
    <li className="text-center font-extralight  mt-2 w-[150px]">
      <TbGrowth style={{ fontSize: '2em', color: 'yellow', margin: 'auto' }} />
      <h2 className="text-2xl mt-4">50000+</h2>
      <p className="text-xl">Happy Customers</p>
    </li>
  </ul>



  <div className="  homepage-3 mx-auto text-gray-200   flex flex-row mt-[100px] w-screen items-center justify-center gap-[100px] flex-wrap ">
                    <div className="w-[30]%">
                        <h3 className="text-6xl ">Why Choose <i className=" font-bold mt-2 text-yellow-300"><br></br> DS Fincorp ?</i></h3>

                    </div>
                    <div className=" why w-[50%]">
                        <p className=" text-l font-extralight">
                        Choose DS Fincorp to streamline your borrowing journey. Since 1989, DS Fincorp has been guiding customers to discover the best financial products in India. With a network of 100+ banks and NBFCs, we ensure customized deals on Personal Loans, Home Loans, Business Loans, Loan Against Property, Gold Loans, and Credit Cards tailored to customer preferences. Our team of 2500+ loan specialists is skilled and trained to assist customers in making well-informed decisions. We handle the entire loan process from application, documentation, approval to disbursal, ensuring a seamless experience for each customer query, regardless of the ticket size. Leveraging the latest tech stack, we prioritize data privacy and security on our website and app. Choose DS Fincorp for a reliable and efficient financial journey.
                        </p>

                    </div>

                </div>
                
           
  </div>
               {/* Slider Section */}
              <div className="mt-8 mb-8 bg-yellow-500   lg:w-screen lg:h-[400px] flex flex-row flex-wrap  justify-center gap-[50px] items-center">
                <div>
                    <h5 className=" text-3xl  text-zinc-800">
                The best offers from<br></br> India's most
                 trusted banks
                 </h5>

                </div>
                <div className="lg:w-[800px]  ">
                <Slider/>
                </div>
               
               </div>



                </div>
            </section>


              {/* Credit Score Section */}
        <section className=" text-black flex flex-col flex-wrap justify-center mb-[50px] items-center  mt-8">
          <div className=" flex flex-row w-screen gap-[40px] flex-wrap justify-center  ">
            <div className=" bg-white feature lg:w-[40%] min-w-[300px] flex flex-row flex-wrap items-center justify-center ">
               <div className=" w-[50%] mt-8">
               <h1 className=" text-2xl ">View and improve your credit score - for free.</h1>
                <ul className=" mt-8 mb-8 flex flex-col flex-wrap items-center justify-center ">
                    <li className=" flex flex-row justify-center  gap-[20px] items-center"> <MdDone /><i>Know how good your score is</i></li>
                    <li className=" flex flex-row justify-center  gap-[20px] items-center"> <MdDone /><i>Know how good your score is</i></li>
                    <li className=" flex flex-row justify-center gap-[20px] items-center"> <MdDone /><i>Know how good your score is</i></li>
                </ul>
                <Link to={"/creditScore"}>
                <button className=" bg-yellow-300 rounded-lg  w-[150px] h-[40px] mb-8 ">
                    Evaluate Now
                </button></Link>
               
               </div>

               <div>
                <img width={250} src={credit}></img>
            </div>


            </div>

            <div className=" bg-white flex feature min-w-[300px] flex-row lg:w-[40%] flex-wrap items-center justify-center ">
               <div className=" w-[50%] mt-8">
               <h1 className=" text-2xl ">EMI CALCULATOR</h1>
              <p className=" mt-8 mb-8">
              "Empower your financial journey with precision. Calculate your monthly EMI with ease, ensuring a pathway to financial stability tailored to your needs."
              </p>
                <Link to={"/creditScore"}>
                <button className=" bg-yellow-300 rounded-lg  w-[150px] h-[40px] mb-8 ">
                    Evaluate Now
                </button></Link>
               
               </div>

               


            </div>

            
           
            
           
          </div>
        </section>
            
           
        </div>
        </>
    )


}