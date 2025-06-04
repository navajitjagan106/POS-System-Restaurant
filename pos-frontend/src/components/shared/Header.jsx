import React from "react";
import { FaSearch, FaUserCircle ,FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { IoMdLogOut } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { removeUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";



const Header = () => {
  const userData=useSelector(state=>state.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logoutMutation=useMutation({
    mutationFn:()=>logout(),
    onSuccess:(data)=>{
      console.log(data);
      dispatch(removeUser());
      navigate("/auth");

    },
    onError:(error)=>{
      console.log(error);
    }
  })
  const handleLogout=()=>{
    logoutMutation.mutate();

  }

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* LOGO */}
      <div onClick={()=>navigate("/")} className="flex items-center gap-2 cursor-pointer">
        <img src={logo} className="h-18 w-16" alt="restro logo" />
        <h1 className="text-lg font-semibold  text-[#f5f5f5]">What's Cookin'</h1>
      </div> 

      {/* SEARCH BAR */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text" 
          placeholder="Search"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5] w-full"
        />
      </div>
      {/* LOGGED USER DETAILS */}
        <div className="flex items-center gap-4">
          {(userData.role === "admin" || userData.role === "Admin") && (
          <div onClick={()=>navigate("/dashboard")} className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
         <LuLayoutDashboard className="text-[#f5f5f5] text-2xl" />
        </div>
          )}

        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
            <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        

        <div className="flex items-center gap-3 cursor-pointer">
            <FaUserCircle className="text-[#f5f5f5] text-4xl" />
            <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-medium">{userData.name||"Test User"}</h1>
            <p className="text-xs text-[#ababab]">{userData.role||"Role"}</p>
            </div>
            <IoMdLogOut onClick={handleLogout} className="ml-2 text-[#f5f5f5]" size={40} />
        </div>

        </div>

    </header>
  );
};

export default Header;
