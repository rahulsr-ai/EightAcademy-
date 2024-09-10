import mongoose from "mongoose";


async function connectDb() {
    try {
        let databaseConnect = await mongoose.connect('mongodb://localhost:27017/testDB')
        console.log('database connected sucessfully');

    } catch (error) {
        console.log(`error in connecting ${error}`);

    }
}


export default connectDb