import React,{useState} from 'react'
import BottomNav from '../components/shared/BottomNav'
import Backbutton from '../components/shared/Backbutton';
import TableCard from '../components/tables/TableCard';
import { tables } from '../constants';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getTables } from '../https/index';
import { enqueueSnackbar } from 'notistack';
const Tables = () => {
  const[status,setStatus]=useState("all")
  
  const {data:resData,isError}=useQuery({
    queryKey:["tables"],
    queryFn:async()=>{
      return await getTables();
    },
    placeholderData:keepPreviousData 
  })

  if(isError){
      enqueueSnackbar("Something Went wrong",{variant:"error"}); 
  }

  console.log(resData);

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-6rem)] overflow-hidden'>
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
            resData?.data.data.map((table)=>{
                 return (
                  <TableCard id={table._id} name={table.tableNo} status={table.status} initial={"AM"} seats={table.seats}/>
                 )
            })
          }
          

        </div>

        


      <BottomNav/>
    </section>
  )
}

export default Tables;