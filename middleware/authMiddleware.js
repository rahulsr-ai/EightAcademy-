import JWT from "jsonwebtoken"


export const isrequired=async(req,res,next)=>{
try {
    const decode= JWT.verify(req.headers.authorization,process.env.secret_key);
    next()
} catch (error) {
    console.log(error)
    res.send({
        success:false,
        message:'error in middleware'
    })
}
}