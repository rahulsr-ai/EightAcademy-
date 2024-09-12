import express from 'express';
import { HandleGetDefault, HandlePostDefult, HandleGetAuth, HandlePostAuth } from '../Controllers/HandleAppController.js'
import { ProtectRoute } from '../middleware/AppAuthMiddleware.js';

const Router = express.Router();



// default route
Router.route("/").get(HandleGetDefault).post(HandlePostDefult)




// AUTH ROUTING 
Router.route("/auth").get(HandleGetAuth).post(HandlePostAuth)

// protected Routes
Router.route("/check").get(ProtectRoute, (req, res) => {
    try {
        res.send('protected route')
    } catch (error) {
        res.send('error')
        console.log("error in protected Route")
        console.log(error);

    }
})


export default Router;






