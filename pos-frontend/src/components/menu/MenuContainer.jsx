import React, { useState } from 'react'
import { menus } from '../../constants'
import { GrRadialSelected } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/slices/cartSlice';

const MenuContainer = () => {
    const[selected,setSelected]=useState(menus[0])
     const [itemcount,setItemcount]=useState(0);
     const[itemid,setItemid]=useState(0);
     const dispatch=useDispatch()

   const increment=(id)=>{
        setItemid(id)
    if(itemcount>=4) return;
    setItemcount((prev)=>prev+1)
  }

  const decrement=(id)=>{
    setItemid(id)
    if(itemcount<=0) return;
    setItemcount((prev)=>prev-1)
  }

  const handleAddtoCart=(item)=>{
    if(itemcount===0 ) return;

    const {name,price}=item
    const newobj={ 
      id:new Date().toISOString(),
      name,
      pricePerQuantity:price,
      quantity:itemcount,
      price:price*itemcount
    }

    dispatch(addItems(newobj));
    setItemcount(0);
  }

  return (
    <>
    <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%] '>
      {
        menus.map((menu)=>{
            return(
                <div key={menu.id} className='flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer'
                style={{ backgroundColor: menu.color }}
                onClick={() => {
                    setSelected(menu);
                    setItemid(0);
                    setItemcount(0);
                }
                    
                }
                >
                    <div className='flex items-center justify-between w-full'>
                        <h1 className='text-[#f5f5f5] text-lg font-semibold'>{menu.icon} {menu.name}</h1>
                        {selected.id===menu.id&&<GrRadialSelected className='text-white'size={20} />}
                    </div>
                    <p className='text-[#ababab] text-sm font-semibold'>{menu.items.length} Items</p>
                </div>
            )
        })
      }
    </div>

    <hr className='border-[#2a2a2a] border-t-2 mt-4'/>

    <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%] '>
      {
        selected?.items.map((item)=>{
            return(
                <div key={item.id} className='flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]'>                   
                        <div className='flex justify-between items-center w-[100%] '>
                          <h1 className='text-[#f5f5f5] text-lg font-semibold '> {item.name}</h1>
                        <button onClick={()=>handleAddtoCart(item)} className='bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg cursor-pointer'><FaCartShopping size={20} /></button>
                        </div>

                    <div className='flex items-center justify-between w-full'>                    
                    <p className='text-[#f5f5f5] text-xl font-bold'>₹{item.price} </p>

                    <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 ">
                    <button   onClick={()=>decrement(item.id)} 
                    className="text-yellow-500 text-2xl">&minus;</button>
                    <span className="text-white"> {item.id===itemid?itemcount:"0"}</span>
                    <button   onClick={()=>increment(item.id)} 
                    className="text-yellow-500 text-2xl">&#43;</button>
                    </div>
                    </div>
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default MenuContainer
