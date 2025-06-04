import { useEffect, useState } from "react"
import {getUserData} from "../https/index"
import React from "react"
import { removeUser, setUser } from "../redux/slices/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const useLoadData=()=>{
   
    const dispatch =useDispatch();
    const navigate=useNavigate();
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        const fetchUser=async()=>{
            try {
                const{data} =await getUserData(); 
                console.log(data);
                const {_id,name,phone,email,role}=data.data;
                dispatch(setUser({_id,name,phone,email,role}))
            } catch (error) {
                dispatch(removeUser());
                navigate("/auth");
                console.log(error)
            }finally{
                setIsLoading(false);
            }
        }
        fetchUser();
    },[dispatch,navigate])
    return isLoading;
}

export default useLoadData;
