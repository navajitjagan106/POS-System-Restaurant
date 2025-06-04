import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { getAvatarName } from '../../utils';
import { getRandomColor,formatDate,formatTime } from '../../utils';

const CustomerInfo = () => {
  const bgColor = getRandomColor();
  const [dateTime,setDateTime]=useState(new Date());
  const customerData =useSelector(state=>state.customer)
  return (
    <div className="flex items-center justify-between px-4 py-3">
    <div className="flex flex-col items-start">
      <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
       {customerData.customerName}
      </h1>
      <p className="text-xs text-[#ababab] font-medium mt-1">
        # {customerData.orderId} / Dine-In
      </p>
      <p className="text-xs text-[#ababab] font-medium mt-2">
        {formatDate(dateTime)}, {formatTime(dateTime)}
      </p>
    </div>
    <button  className="bg-[#f6b100] w-12 h-12 text-xl font-bold rounded-lg flex items-center justify-center"
    style={{backgroundColor:bgColor}}>
      {getAvatarName(customerData.customerName)}
    </button>
  </div>
  )
}

export default CustomerInfo
