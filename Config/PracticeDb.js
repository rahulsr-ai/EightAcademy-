import mongoose from "mongoose";


async function pracDb() {
    try {
        let databaseConnect = await mongoose.connect('mongodb://localhost:27017/practiceDb')
        console.log('database connected sucessfully');

    } catch (error) {
        console.log(`error in connecting ${error}`);

    }
}


export default pracDb