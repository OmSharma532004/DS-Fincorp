import React from "react";
import cc from "../data/CreditCard/cc2.png"
import lc from "../data/CreditCard/lc.webp"
import access from "../data/CreditCard/access.webp"
import score from "../data/CreditCard/score.webp"
import { MdDone } from "react-icons/md";
import credit from "../data/Homepage/credit.jpeg"
import { Link } from "react-router-dom";
import hdfc from "../Homepage/hdfc4.webp"
import axis from "../data/CreditCard/axis4.webp"
import sbi from "../data/CreditCard/sbi.webp"
import yes from "../data/CreditCard/yesbank.webp"
import au from "../data/CreditCard/au.webp"
import hsbc from "../data/CreditCard/HSBC.webp"
import idfc from "../Homepage/idfc.webp"


import Slider from "../Homepage/Slider";
import Dropdown from "../common/Dropdown";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import { GoDotFill } from "react-icons/go";


export const CreditCard =()=>{
    const photos = [
        hdfc,
        idfc,
        axis,
        yes,
        sbi,
        au,
        hsbc

      ];
   
    return(
        <>
       <div className=" flex flex-col flex-wrap justify-center items-start mx-auto gap-8">  
       
       <section className=" mt-8">
        <div className=" flex  flex-row  w-screen  flex-wrap  justify-center lg:gap-[100px] items-center">
            <div className="lg:w-[30%] p-8 flex flex-col gap-[40px] flex-wrap items-center  justify-center ">
                <h1 className=" text-5xl"><b className="text-yellow-300">Credit cards </b>for all your needs.</h1>
                <p className=" text-gray-300 font-extralight text-xl">Compare & Apply for the Best Credit Cards 
                Online. MyMoneyMantra helps you find the best credit cards available in India basis on their 
                categories, annual fees, and renewal fees. You can compare them and choose what suits you the best,
                 depending on your need and budget.</p>
                       <button className=" w-[200px] h-[40px] text-xl  text-black font-semibold bg-yellow-300 rounded-xl">
                        Compare & Apply
                       </button>


            </div>
            <div className=" animate-pulse rotate-12 ">
                <img width={600}  src={cc}></img>


            </div>
        </div>
       </section>

       <section className="flex-col flex flex-wrap justify-center items-center  ">
        <div className=" flex rounded-xl flex-row bg-white mx-auto text-black flex-wrap justify-around py-[50px] gap-10 w-[90%]    ">
            <div className="w-[40%]">
            <h1 className="text-4xl font-bold ">Let’s find the best credit card for you.</h1>
            <p className="mt-8 font-extralight text-gray-500 text-xl">Share your preferences, fill form & we will find the best match for you.</p>
            </div>
            <div className=" ">
                <form className="flex flex-col gap-8 flex-wrap  items-end justify-center">
                    <input className=" border  p-4" type="text"  placeholder="Full Name" color="black" name="fullName"  />
                    <input className=" border  p-4" type="text"  placeholder="Phone No" color="black" name="phone"  />
                    <input className=" border  p-4" type="text"  placeholder="Email" color="black" name="email"  />
                    <input className=" border  p-4" type="text"  placeholder="Residence pincode" color="black" name="amount"  />
                    <button className=" bg-yellow-300 text-black text-xl  p-4 rounded-xl mt-5">
                        Enquire Now
                    </button>
                </form>
            </div>

        </div>
        <div className=" w-[90%] rounded-xl  p-8 pt-[40px] pb-[100px] mb-[50px] bg-yellow-300 text-black flex flex-row flex-wrap mt-8 
        justify-around items-center ">
            <div className=" flex  flex-col items-center justify-center  flex-wrap gap-5 lg:w-[25%]">
                <img src={lc}></img>
                <h2 className="font-bold text-2xl ">
                Loans & credit cards

                </h2>
                <p className=" text-gray-800 font-light">
                Check your latest credit score instantly online and get access to the list of preapproved loans & credit card offers for your profile.
                </p>
            </div>
            <div className="  flex flex-col items-center justify-center  flex-wrap gap-5 lg:w-[25%]">
                <img src={access}></img>
                <h2 className=" font-bold text-2xl">
                Free & unlimited access
                </h2>
                <p className=" text-gray-800 font-light">
                Get free & unlimited access to your complete credit information report. Analyse your credit history & improve your credit score.</p>
            </div><div className=" flex flex-col items-center justify-center  flex-wrap gap-5 lg:w-[25%]">
                <img src={score}></img>
                <h2 className="font-bold text-2xl ">
                Check Experian Score 24x7

                </h2>
                <p className=" text-gray-800 font-light">
                Check your Experian credit score 24X7. Protect yourself against identity thefts, bank reporting errors & poor credit rating. </p>
            </div>



        </div>
        <div className="mt-8 mb-8 bg-yellow-500   lg:w-screen lg:h-[400px] flex flex-row flex-wrap  justify-center gap-[50px] items-center">
                <div>
                    <h5 className=" text-3xl font-bold  text-zinc-800">
                The best offers from<br></br> India's most
                 trusted banks
                 </h5>

                </div>
                <div className="lg:w-[800px]  ">
                <Slider photos={photos}/>
                </div>
               
               </div>


      
       </section>

       

       <section className=" text-black flex flex-col flex-wrap justify-center mb-[50px] items-center  mt-8">
            <h4 className=" text-yellow-300  text-4xl font-extrabold mb-[50px]">Financial Tools</h4>
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
                <Link to={"/emicalculator"}>
                <button className=" bg-yellow-300 rounded-lg  w-[150px] h-[40px] mb-8 ">
                    Evaluate Now
                </button></Link>
               
               </div>

               


            </div>

            
           
            
           
          </div>
        </section>
        {/* Learn More */}
        <h6 className=" w-screen  text-center mx-auto text-4xl text-yellow-300 font-bold">Learn More About Personal Loan</h6>
        <section className=" text-black   rounded-xl flex-col flex     w-[80%] mx-auto  mb-[50px]  mt-8">
            <div className="  border-black  p-4">
            <Dropdown heading={"Personal Loan: Key Highlights "} details={<div>
                <ol >
                    <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div> Current lowest personal loan interest rates start from 10.50% p.a</li>
                    <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div> Compare 100+ personal loan banks at MyMoneyMantra and choose the best one.</li>
                    <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div> Check fees & charges of all top banks offering personal loans in India.</li>
                    <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div> Get flexible tenure of 36 to 84 months to repay the loan.</li>
              
                    <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div> Submit online loan application and get instant loan approval</li>
                </ol>
            </div>}/>
      
                
            </div>
              <div className=" border-black  p-4">
            <Dropdown heading={"Personal Loan Overview "} details={<div>
                A personal loan is the best option to get access to funds in case of an emergency. Once you fulfill the necessary Personal Eligibility Criteria, you can meet any expense like medical emergency, travel needs, education fees, etc. with this simple, unsecured loan. 
            </div>}/>
      
                
            </div>
            <div className=" p-4 border-black   ">
            <Dropdown heading={"Types of Personal Loan"} details={<div>
                <ol className=" flex-col flex gap-2">
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b>Travel Loan:  </b>These personal loan schemes are for people who love travelling. This loan is called by many names, including Travel Loan, vacation loan, and holiday loan. You can avail this loan to travel around the world, and pay the bills latrine affordable EMIs. You can also get travel insurance as an added benefit with this loan.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b> Wedding Loan:</b> Weddings in India come with a long list of expenses. It's once in a lifetime experience for everyone and to make it more memorable many people often need financial support. Therefore, many lenders have started providing Personal Loans for Weddings These loans are availed by the would-be brides and grooms or their family members to pay for the wedding related expenses like venue booking, catering, honeymoon vacation, etc.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div> <b>Festival Loan:</b> These loans are offered for celebrating festivals, parties, and functions. Festival loans help you in preparing for the festivities and hosting parties.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b>Consumer Durable Loan:</b> As the name suggests, this personal loan variant is availed for the purchase of appliances or consumer durables</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div> <b>Pension Loan: </b>Pension loans can be availed by retired personnel to fulfil their financial needs like paying medical bills, meeting daily expenses, etc. Under pension loans, banks provide a few times the amount of pension the pensioner has drawn in previous months before submitting the loan application.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b>Home Renovation Loan: </b>These loans are provided for the purpose of renovation, repair, purchase of new material, and other house-related expenses.</div> </li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div> <b>Education Loan: </b>You can use these loans for paying the tuition fees of your child, or any other big academic requirements like going abroad.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b>Computers and Mobile Phones Loan: </b>Many lenders nowadays are offering computer loans and mobile phone loans for the purchase of computers, laptops, and smartphones. Some lenders even offer insurance with the loan.</div></li>
               
                </ol>
            </div>}/>
            
      
                
            </div>
            <div className=" p-4 border-black   ">
            <Dropdown heading={"Features & Benefits of Personal Loan"} details={<div>
                <ol className=" flex-col flex gap-2">
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b>The rate of Interest:</b>The Rate of Interest on Personal Loans starts with 10.50%  depending on your credit score, income and so forth.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div> <b>Loan amount:</b>You can get a loan online for as low as 20,000 and as high as Rs. 1 Cr. depending on your requirement and eligibility.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div> <b>Loan tenure: </b>Personal loans are available for periods as short as 12 months. The average tenure for a Personal Loan is between 12 and 60 months, depending on the loan amount.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div> <b>Security: </b>Due to its unsecured nature, collateral is not required.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div> <b>Loan turnaround time:</b> A Personal Loan typically has the fastest turnaround time in the industry. Many banks personal loans online approval within 48 hours after submission of the online application.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div> <b>Processing fees:</b>It depends on the individual bank. It usually 3.5% of the loan amount.</div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div> <b>Prepayment penalty:</b> Banks charge prepayment penalty if you repay your Personal Loan before the determined period. The charges range between 1-2% of the outstanding amount on the date of closure.</div></li>
               
                </ol>
            </div>}/>
            
      
                
            </div>
            <div className=" p-4 w-[100%]  border-black   ">
            <Dropdown heading={"Personal Loan Interest Rates & Charges"} details={<div className="w- mx-auto overflow-auto"> 
                <table  className=" lg:max-w-[100%] mx-auto  mb-[30px] border-2 border-black table">
                   <tr >
                    <th>   Name of the Bank </th>
                    <th>  Interest Rate  </th>
                    <th> EMI Payable Per year/ lakh  </th>
                    <th> Processing Fees  </th>
                   </tr>
                   <tr>
                    <td><b> State Bank of India </b></td>
                    <td> 10.55% </td>
                    <td> Rs.8773 </td>
                    <td> Up to 1.5% of loan amount subject to a maximum of Rs.15000 </td>

                   </tr>
                   <tr>
                    <td><b> Union Bank of India </b></td>
                    <td> 9.30% - 13.40%  </td>
                    <td> Rs.8741 </td>
                    <td> 0.50% of the loan amount </td>

                   </tr>
                   <tr>
                    <td><b> IndusInd Bank Ltd </b></td>
                    <td> 10.5%
 onwards </td>
                    <td> s.8838 </td>
                    <td> Up to 3% of the loan amount </td>

                   </tr>
                   <tr>
                    <td><b> IndusInd Bank Ltd </b></td>
                    <td> 10.5%
 onwards </td>
                    <td> s.8838 </td>
                    <td> Up to 3% of the loan amount </td>

                   </tr>
                   <tr>
                    <td><b> IndusInd Bank Ltd </b></td>
                    <td> 10.5%
 onwards </td>
                    <td> s.8838 </td>
                    <td> Up to 3% of the loan amount </td>

                   </tr>
                   <tr>
                    <td><b> IndusInd Bank Ltd </b></td>
                    <td> 10.5%
 onwards </td>
                    <td> s.8838 </td>
                    <td> Up to 3% of the loan amount </td>

                   </tr>
                </table>
            </div>}/>
            
      
                
            </div>

            <div className=" p-4 border-black   ">
            <Dropdown heading={"Features & Benefits of Personal Loan"} details={<div>
                <ol className=" flex-col flex gap-2">
                <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div>Click on the ‘Compare and Apply’ option </li>
                <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div>Fill up a registration form with necessary details</li>
                <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div>Get the latest personal loan offers and choose from them. </li>
                <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div>Apply for the loan plan that you have chosen. </li>
                <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div>Fill up a simple form online </li>
                <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div>Provide necessary personal loan document.</li>
                <li className=" flex gap-2 flex-wrap"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div>Once the application form is received, you will be contacted by the Bank’s representatives.  </li>
               
                </ol>
            </div>}/>
            
      
                
            </div>
            <div className=" p-4 border-black   ">
            <Dropdown heading={"Features & Benefits of Personal Loan"} details={<div className=" overflow-auto">
              <table className=" mx-auto lg:w-[60%]   mb-[30px]">
                <tr>
                    <td><b>  Occupation </b></td>
                    <td> Salaried employees, self-employed professionals, self-employed non professionals, and business owners  </td>
                </tr>
                <tr>
                    <td><b>  Age </b></td>
                    <td> Minimum 21 years at loan application and maximum 60 years at loan maturity  </td>
                </tr>
                <tr>
                    <td><b>  Monthly income </b></td>
                    <td> 20,000  </td>
                </tr>
                <tr>
                    <td><b> Job/business continuity </b></td>
                    <td> 2 years continuous job or 3 years continuity in business </td>
                </tr>
                <tr>
                    <td><b> ITR </b></td>
                    <td>  Last 2 years IT returns </td>
                </tr>
                <tr>
                    <td><b> Credit score </b></td>
                    <td> 700 & above </td>
                </tr>
                
              </table>
            </div>}/>
            
      
                
            </div>
            <div className=" p-4 border-black   ">
            <Dropdown heading={"Factors Affecting the Eligibility of a Personal Loan"} details={<div>
                <ol  className=" flex-col flex gap-2">
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b>Credit score:  </b> This is the most crucial eligibility factor. A credit score of 700 or above is typically considered a good score for personal loans. The better your credit score, the higher are your chances to get a loan online.  </div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b> Income:  </b> People with higher income are more eligible for a higher loan amount than those who have low income.</div> </li>
                <li className=" flex gap-2"><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b>  Employment:  </b> Employees of listed companies, Central and State Governments, and public sector undertakings are eligible for a higher amount. </div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b> Work continuity: </b> You should be a long-term employee of your current organisation. In case you are self-employed, the continuity of business and income is the most critical</div>
 </li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b>Age of the borrower: </b>  The minimum age requirement is 21 years. Banks have their criteria for deciding the maximum age limit. In most cases, your age at the end of the repayment period should not exceed 65 years. </div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b>Loan amount: </b>  Applying for a loan amount that you can service comfortably makes you more eligible for a personal loan and improves your chances of approval. </div></li> 
                </ol>
            </div>}/>
            
      
                
            </div>
            <div className=" p-4 border-black   ">
            <Dropdown heading={"Features & Benefits of Personal Loan"} details={<div className=" overflow-auto">
              <table className=" mx-auto lg:w-[60%]   mb-[30px]">
                <tr>
                    <td><b> KYC Documents</b></td>
                    <td> <ol>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>PAN Card </li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Aadhar Card </li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div> Driving Licence</li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Voter ID</li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Passport </li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Registered Rent Agreement </li>
                        
                        </ol> </td> </tr>
                       <tr>
                    <td><b> Income Documents - Salaried</b></td>
                    <td> <ol>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Salary slips for the last 6 months </li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>IT Return along with Form 16 for the past 2 years</li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Bank account statements of previous 3 months that reflects your salary credits and other income</li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Employment certificate from current employe</li>
                   
                        
                        </ol> </td> </tr> <tr>
                    <td><b> Income Documents - Self-employed</b></td>
                    <td> <ol>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Financial statements that include Balance Sheet and Profit and Loss Statement</li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>IT Returns for the last 2 years</li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div> Driving Licence</li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Proof of continuity of business income such as Bank Account Statement</li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Evidence of doing business like GST Registration</li>
                        
                        </ol> </td> </tr>
                        <tr>
                    <td><b>Other Documents</b></td>
                    <td> <ol>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Personal loan application form</li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div>Recent passport-sized photographs </li>
                        <li className="flex gap-1"><div className="mt-1"><GoDotFill /></div> Processing fee cheque</li>

                        
                        </ol> </td> </tr> 
            
                
              </table>
            </div>}/>
            
      
                
            </div>
            <div className=" p-4 border-black   ">
            <Dropdown heading={"Points to Keep in Mind Before Taking a Personal Loan"} details={<div>
                <ol  className=" flex-col flex gap-2">
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b> Keep your credit score high: </b> A credit score represents your creditworthiness based on your past repayment history. Try to repay your existing debts on time and regularly. Clear your existing loan before applying for a new loan. This will improve your credit score. To avail a personal loan you should have a good credit score (preferably 700 or above).  </div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b> Compare all the offers before application: </b> Make sure you compare the interest rates, eligibility, and other features of all personal loan options available for you before applying for a loan. This will ensure you get the low interest rate personal loan and the best available deal. </div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b> Assess the entire cost:  </b>  Before finalising the deal make sure you have assessed the entire cost of your personal loan, including interest rates, processing fees, prepayment charges, and so on. </div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b> Analyse your needs: </b>: Don't take a personal loan to fulfil any of your fancy. Remember that it's only you who is going to repay the loan and that too with an added interest. Consider borrowing a personal loan to finance your needs and not your wants.  </div></li> 
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b> Evaluate your repayment capacity:  </b>Before borrowing, evaluate how capable you are for its repayment. Make sure your income is enough to repay EMIs each month for a few years without creating any financial burden.  </div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div><b>Don't fall for fake offers:   </b> All that glitters is not gold. Someone may offer you a concession on the interest rate on online loans, but can trick you with other additional costs, making your instant loan a more expensive deal. </div></li>
                 </ol>

            </div>}/>
            
      
                
            </div>
            <div className=" p-4 border-black   ">
            <Dropdown heading={"How to use Personal Loan Effectively (Tips & Advice)"} details={<div>
                <p>
An unsecured loan like a personal loan can affect your CIBIL score negatively. So, even with the Best Personal Loan In India, you need to keep some tips in mind: </p>
                <ol  className=" flex-col flex gap-2">

                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div>Avoid taking personal loans for business requirements   </div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div> Repay personal loans on time to avoid issues with your CIBIL score.  </div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div>Apply for a personal loan only when you have no other resources for financing.   </div></li>
                <li className=" flex gap-2 "><div className=" mt-1"><IoIosCheckmarkCircleOutline /></div><div>Only apply for the loan amount that you need immediately.   </div></li>
                 </ol>

            </div>}/>
            
      
                
            </div>

        </section>

            
       </div>
        
        </>

    )

}