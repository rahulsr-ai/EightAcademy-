
import AuthUserModel from "../Models/AuthModel.js";

// a function which returns the encrypt password after providing it a user password  
import { ComparePassword, encryptPassword } from "../Helpers/AuthPassword.js";

import jwt from "jsonwebtoken"


export const HandleGetDefault = (req, res) => {
    res.sendFile("welcomePage.html", { root: "public" })
};



// Handling the post request and creating the user in the database 
export const HandlePostDefult = async (req, res) => {

    try {
        // Check if the request body is missing
        if (!req.body) {
            // If body is undefined, send a response and stop further execution
            res.send('Request body is undefined');
            return;
        }

        const { email, password } = req.body;

        // providing  user password in arguements to encryptPassword function which is in helper folder  
        const hashedPassword = await encryptPassword(password);

        // Check if a user with the given email already exists in the database
        const userExist = await AuthUserModel.findOne({ email: email });

        // If user exists (userExist is not null), send a message and stop further execution
        if (userExist !== null) {
            res.send('User already exists');
            return; // Prevent further execution to avoid creating duplicate users
        }

        // If user does not exist, create a new user with the provided email and encrypted password
        await AuthUserModel.create({
            email: email,
            password: hashedPassword,
        });

        // After successful creation of the user, redirect to the homepage
        res.redirect("/");

    } catch (error) {
        // Catch any errors during the process and send a 404 error status
        // Log the error for debugging purposes
        res.status(404).send(error);
        console.log('Error occurred while creating user:', error);
    }



};





// APP AUTHENTICATION   

export const HandleGetAuth = (req, res) => {
    res.sendFile("AuthCreateAccount.html", { root: "public" })
}



export const HandlePostAuth = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            res.send('required both email and password')
            return
        }

        const user = await AuthUserModel.findOne({ email: email })


        console.log(user);

        if (!user) {
            res.send('user not found ')
            return
        }

        const comparePassword = await ComparePassword(password, user.password)

        const token = await jwt.sign({ _id: user._id }, "secertKey")
        console.log(token);


        if (!comparePassword) {
            res.send('password not matched')
            return;
        } else {
            res.send('login successfully')
            return;
        }

    } catch (error) {

        console.log('error in login ');
        console.log(error);
        res.send('error ')

    }

}










