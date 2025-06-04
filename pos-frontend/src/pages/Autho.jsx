import React, { useState } from "react";
import restaurant from "../assets/images/restaurant.png";
import logo from "../assets/images/logo.png"
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

const Autho = () => {
  const[isRegister,setIsRegister]=useState(false);

  return (
  
    <div className="flex min-h-screen w-full overflow-hidden scrollbar-hide">
      {/* Left Section */}
      <div className="w-1/2 relative flex items-center justify-center bg-cover">
        {/* BG Image */}
        <img className="w-full h-full object-cover" src={restaurant} alt="Restaurant Image" />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Quote at bottom */}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
          "People who love to eat are always the best people — we just make sure they eat the best food."
          <br />
          <span className="block mt-4 text-yellow-400">
             -Navajit S A
          </span>
        </blockquote>
      </div>
     
        {/*Right Section*/}
        <div className="w-1/2 min-h-screen  bg-[#1a1a1a] p-10 overflow-hidden scrollbar-hide">
        <div className="flex flex-col items-center  ">
          <img src={logo} alt="Restro Logo" className="h-24 w-30 border-2 rounded-full p-1" />
          <h1 className="text-lg font-semibold text-[#f5f5f5] pt-4 tracking-wide">What's Cookin?</h1>
        </div>

        <h2 className="text-4xl  flex-column text-center mt-8 font-bold text-yellow-400 mb-10">
           {isRegister? " Employee Registration": "Employee Login"}
        </h2>


         {/* Components*/}
         {isRegister?<Register setIsRegister={setIsRegister}/>:<Login/>}
         

          <div className="flex justify-center mt-6">
            <p className="text-lg text-[#ababab]">
             {isRegister?" Already have an account? ":"Dont Have an account? "}
              <a onClick={()=> setIsRegister(!isRegister)}
              className="text-yellow-300 font-semibold hover:underline" href="#">
                { isRegister?"Sign in":"Sign up"}
              </a>
            </p>

          </div>

         </div>
     
    </div>



   
  )
}

export default Autho;
