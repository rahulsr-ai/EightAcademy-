import bcrypt from 'bcrypt'
import PrauserModel from '../Models/PracUser.js'


export const encryptPassword = async (password) => {
    try {
        const saltRounds = 10;
        // Technique 2 (auto-gen a salt and hash):
        return hash = await bcrypt.hash(password, saltRounds);
        // Store hash in your password DB.     
    } catch (error) {
        console.log('error in hashing the passsword ');
        console.log(error);


    }
}