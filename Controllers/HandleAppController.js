
import AuthUserModel from "../Models/AuthModel.js";

// a function which returns the encrypt password after providing it a user password  
import { encryptPassword } from "../Helpers/AuthPassword.js";



export const HandleGetDefault = (req, res) => {
    res.sendFile("welcomePage.html", { root: "public" })
};



// Handling the post request and creating the user in the database 
export const HandlePostDefult = async (req, res) => {

    try {
        if(!req.body) { res.send('body is undefined ')}
        const { email, password } = req.body;

        // Providing password to the encryptPassword function where we encrypting it and saving the hashed password in
        // this variable 
        let encryptedPassword = await encryptPassword(password)


        // checking if is there any user with the email we get 
        const userExist = AuthUserModel.findOne({ email: email });


        // if email already in our database we didnot create another account with the same email;
        if (!userExist) {
            res.send('user already exists')
        } else {
            
            AuthUserModel.create({
                email: email,
                password: encryptedPassword
            })

            res.redirect("/")
        }


    } catch (error) {
        res.status(404).send(error)
        console.log('error in creating user');


    }


};




// APP AUTHENTICATION   

export const HandleGetAuth = (req, res) => {
    res.sendFile("AuthCreateAccount.html", { root: "public" })
}



export const HandlePostAuth = (req, res) => {
    console.log('post route')
    res.redirect("/login")
}






