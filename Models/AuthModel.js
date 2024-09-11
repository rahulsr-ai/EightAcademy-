import mongoose from "mongoose";



const AuthUserSchema = mongoose.Schema({
    email: { type: String, require: true, },
    password: { type: String, require: true, trim: true }
})


const AuthUser = mongoose.model("AuthUser",  AuthUserSchema)
export default AuthUser;