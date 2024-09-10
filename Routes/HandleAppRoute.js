import express from 'express';
import { HandleGetDefault, HandlePostDefault, HandleGetid, HandlePostid, HandleGetAuth, HandlePostAuth } from '../Controllers/HandleAppController.js';


const Router = express.Router();




Router.route('/')
  .get(HandleGetDefault)
  .post(HandlePostDefault)



Router.route('')
  .get(HandleGetid)
  .post(HandlePostid)



// AUTH ROUTING 
Router.route("/user").get(HandleGetAuth).post(HandlePostAuth)



export default Router;






