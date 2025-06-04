const createHttpError = require("http-errors")
const Order=require("../models/orderModel")
const mongoose=require("mongoose")

 const addOrder=async(req,res,next)=>{
    try {

        //const{customerDetails,orderStatus,bills,items}=
        const order=new Order(req.body)
        await order.save()
                if (order.table) {
            await Table.findByIdAndUpdate(order.table, {
                currentOrder: order._id,
               
            });
        }
        res.status(201).json({success:true,message:"Order Created",data:order})        
    } catch (error) {
        next(error)
    }

 }


 const getOrderById=async(req,res,next)=>{
    try {
        const {id}= req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            const error=createHttpError(404,"Invalid id");
            return next(error);
        }

        const order=await Order.findById(id)
        if(!order){
            const error=createHttpError(404,"Order Not Found");
            return next(error);
        }
        res.status(200).json({success:true,data:order})

    } catch (error) {
        next(error)
    }
 }


 const getOrders=async(req,res,next)=>{
    try {
        const orders=await Order.find();
        res.status(200).json({data:orders});
        
    } catch (error) {
        next(error)
    }
 }


 const updateOrder=async(req,res,next)=>{
    try {
        
        const {orderStatus} =req.body
        const {id}= req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            const error=createHttpError(404,"Invalid id");
            return next(error);
        }

        const order= await Order.findByIdAndUpdate(
            id,
            {orderStatus},
            {new:true}
        );

        if(!order){
            const error=createHttpError(404,"Order Not Found");
            return next(error);
        }
        res.status(200).json({success:true,message:"Order updated!",data:order});        
        
    } catch (error) {
        next(error)
    }
 }


 module.exports={addOrder,getOrderById,getOrders,updateOrder}