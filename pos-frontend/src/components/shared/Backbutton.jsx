import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Backbutton = () => {
    const navigate=useNavigate()
  return (
    
    <button onClick={()=>navigate(-1)} className='bg-[#025cca] p-2 text-xl font-bold rounded-full text-[#ffffff] '>
      <IoMdArrowRoundBack />
    </button>
  )
}

export default Backbutton
