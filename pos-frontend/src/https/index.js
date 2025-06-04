import axios from "axios"

const api=axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json" 
    }
})

//endpoints

export const login=(data)=>api.post ("/api/user/login",data)

export const register=(data)=> api.post("/api/user/register",data)

export const getUserData=(data)=>api.get("api/user")

export const logout=(data)=>api.post("/api/user/logout",data)



export const addTable=(data)=> api.post("/api/table/",data)

export const getTables=()=>api.get("/api/table");
