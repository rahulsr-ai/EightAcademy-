import express from 'express'
import { authLogin, registerController, usertest } from '../Controllers/authController.js';
import { isrequired } from '../middleware/authMiddleware.js';
//router object
const router=express.Router()

router.post("/register",registerController)
router.post("/login",authLogin)
router.get("/test",isrequired,usertest)

export default router;









