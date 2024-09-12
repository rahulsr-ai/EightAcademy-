import bcrypt from 'bcrypt'

import pkg from 'bcrypt'
const {hash} = pkg;
// Encrypting the password ;

export const encryptPassword = async (password) => {
    // const {data, saltRound} = pkg
    
    try {
        const saltRound = 10
        const hashedPassword = await bcrypt.hash(password, saltRound)
        return hashedPassword;

    } catch (error) {
        console.log('error in hasing the password ');
        console.log(error);
        

    }
}



// Decrypting the password 
export const ComparePassword= async (password, encryptedPassword) => { 
    return bcrypt.compare(password, encryptedPassword  )
}






