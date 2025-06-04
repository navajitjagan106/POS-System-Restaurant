    require ("dotenv").config()
    const express = require ("express")
    const connectDb=require("./config/database")
    const config=require("./config/config")
    const globalErrorHandler = require("./middlewares/globalErrorHandler")
    const cookieParser = require("cookie-parser")
    const cors=require("cors")

    const app =express()

    const PORT= config.port
    connectDb()

    //Middlewares
    app.use(cors({
        credentials:true,
        origin:['http://localhost:5173']
    }))
    app.use(express.json())
    app.use(cookieParser())


    app.get("/", (req,res)=>{
        res.json({message:"HELLO from POS SERVER!"})
    })

    //Other endpoints
    app.use("/api/user",require("./routes/userRoute"))
    app.use("/api/order",require("./routes/orderRoute"))
    app.use("/api/table",require("./routes/tableRoute"))


    //GlobalError Handler
    app.use(globalErrorHandler)

    app.listen(PORT,()=>{
        console.log(`POS server is listen on port ${PORT}`)
    })