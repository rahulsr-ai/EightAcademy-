import bcrypt from 'bcrypt'



// Encrpting the password 
export const hashPassword = async (password) => {
    try {
        const saltRound = 10;
        const hasedPassword = await bcrypt.hash(password, saltRound);
        return hasedPassword; // HERE WE GET THE Encrpt password something like 
    } catch (error) {
        console.log(error)
    }
}



// decrypting the password 
export const passwordCompare = async (password, hasedPassword) => {
    
    return bcrypt.compare(password, hasedPassword)

}



