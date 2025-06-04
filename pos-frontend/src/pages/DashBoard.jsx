import React, { useState } from "react";
import { MdTableBar, MdCategory } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import Metrics from "../components/DashBoard/Metrics";
import RecentOrders from "../components/DashBoard//RecentOrders";
import Modal from "../components/DashBoard/Modal";

const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" }
];

const tabs=[ "Metrics","Orders","Payment"];



const DashBoard = () => {
    const [activeTab,setActiveTab]=useState("Metrics");
    const[isTableModalOpen,setIsTableModalOpen] =useState(false);


    const handleopenModal=((action)=>{
        if(action==="table") setIsTableModalOpen(true)
    })
  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-6rem)] overflow-y-auto scrollbar-hide">
      <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
        <div className="flex items-center gap-3">
          {buttons.map(({ label, icon, action }) => {
            return(
                <button
              className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2"
              onClick={()=>handleopenModal(action)}>
              {label} {icon} 
            </button>
            )
            })}
        </div>

         <div className="flex items-center gap-3">
          {tabs.map(( tab ) => {
            return(
                <button
              className={` px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2
                 ${activeTab ===tab ?"bg-[#262626]":"bg-[#1a1a1a] hover:bg-[#262626]"}`}
              onClick={()=>setActiveTab(tab)}>
              {tab} 
            </button>
            )
})}
        </div>
        </div>
        {activeTab==="Metrics"&& <Metrics/>}
        {activeTab==="Orders"&& <RecentOrders/>}
        {isTableModalOpen &&<Modal setIsTableModalOpen={setIsTableModalOpen}/>}
        

    </div>
  );
};

export default DashBoard;
