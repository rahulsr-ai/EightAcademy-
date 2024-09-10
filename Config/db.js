import mongoose from "mongoose";

const dbconnect = async () => {

    try {
        let dbcon = await mongoose.connect('mongodb://localhost:27017/')
        console.log("data connected.....")
    } catch (error) {
        console.log("error in database", error)
    }

}

export default dbconnect;