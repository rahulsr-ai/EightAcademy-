import express from 'express';
import {HandleGetDefault, HandlePostDefult, HandleGetAuth, HandlePostAuth} from '../Controllers/HandleAppController.js'

const Router = express.Router();



// default route
Router.route("/").get(HandleGetDefault).post(HandlePostDefult)




// AUTH ROUTING 
Router.route("/auth").get(HandleGetAuth).post(HandlePostAuth)



export default Router;






