import mongoose from "mongoose";



const Userschema = mongoose.Schema({
    name: String,
    email: String,
    Username: String
})


const Prauser = mongoose.model("User", Userschema)
export default Prauser


