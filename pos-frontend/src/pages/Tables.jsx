import React,{useState} from 'react'
import BottomNav from '../components/shared/BottomNav'
import Backbutton from '../components/shared/Backbutton';
import TableCard from '../components/tables/TableCard';
import { tables } from '../constants';
const Tables = () => {
  const[status,setStatus]=useState("all")
  

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
       <div className='flex items-center justify-between px-10 py-4 mt-2'>
        <div className='flex items-center gap-4'>
          <Backbutton/>
           <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'> Tables</h1>
        </div>
        <div className='flex items-center justify-around gap-4'>
          <button onClick={() =>setStatus("all")} className={`text-[#ababab] text-lg ${status==="all"&& 'bg-[#383838] rounded-lg px-5 py-2'}  rounded-lg px-5 py-2 font-semibold`}>All</button>
          <button onClick={() =>setStatus("booked")} className={`text-[#ababab] text-lg ${status==="booked"&& 'bg-[#383838] rounded-lg px-5 py-2'} rounded-lg px-5 py-2 font-semibold`}>Booked</button>
          
        </div>
        </div>
        
        <div  className='flex flex-wrap gap-5  px-12 py-4 justify-center overflow-y-scroll h-600px] scrollbar-hide' >
          {
            tables.map((table)=>{
                 return (
                  <TableCard key={table.id} id={table.id} name={table.name} status={table.status} initial={table.initial} seats={table.seats}/>
                 )
            })
          }
          

        </div>

        


      <BottomNav/>
    </section>
  )
}

export default Tables;