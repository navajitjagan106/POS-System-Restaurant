import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import Backbutton from '../components/shared/Backbutton'
import { MdOutlineRestaurantMenu } from "react-icons/md";
import MenuContainer from '../components/menu/MenuContainer';

import CustomerInfo from '../components/menu/CustomerInfo';
import CartInfo from '../components/menu/CartInfo';
import BillInfo from '../components/menu/BillInfo';

const Menu = () => {
    
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3 '>
        {/* Left Div */}
       <div className="flex-[3] ">
        
        <div className='flex items-center justify-between px-10 py-4 mt-2'>
        <div className='flex items-center gap-4'>
          <Backbutton/>
           <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'> Menu</h1>
        </div>
       
        <div className='flex items-center justify-around gap-4'>
          <div className="flex items-center gap-3 cursor-pointer">
                      <MdOutlineRestaurantMenu className="text-[#f5f5f5] text-4xl" />
                      <div className="flex flex-col items-start">
                      <h1 className="text-md text-[#f5f5f5] font-medium">Customer name</h1>
                      <p className="text-xs text-[#ababab]">Table no:</p>
                      </div>
                  </div>         
        </div>
        </div>
         <MenuContainer/>
         
      </div>

      {/* Right Div */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2">
        {/* Customer Info */}
        <CustomerInfo/>
        <hr className="border-[#2a2a2a] border-t-2" />

        {/* Cart Items */}
        <CartInfo/>
        <hr className="border-[#2a2a2a] border-t-2" />


        {/* Bills */}

        <BillInfo/>
      </div>

      <BottomNav/>
    </section>
  )
}

export default Menu
