import JWT from "jsonwebtoken"
import { User } from "../Models/User.model.js";

export const isrequired=async(req,res,next)=>{
try {
    const decode= JWT.verify(req.headers.authorization,process.env.secret_key);
    req.user=decode;
    next()
} catch (error) {
    console.log(error)
    res.send({
        success:false,
        message:'error in middleware'
    })
}
}


export const isAdmin=async(req,res,next)=>{
    try {
        const user=await User.findById(req.user._id)

       if(user.role !==1){
        res.status(401).send({
            success:false,
            message:"unAuthorised Access"
        })
       }
       else
       {
        next()
       }
        
    } catch (error) {
        console.log(error)
        console.log("error in admin middleware")
    }
}