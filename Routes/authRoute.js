import express from 'express'
import { authLogin, registerController, usertest } from '../Controllers/authController.js';
import { isrequired,isAdmin} from '../middleware/authMiddleware.js';
//router object
const router=express.Router()

router.post("/register",registerController)
router.post("/login",authLogin)
router.get("/test",isrequired,isAdmin,usertest)

export default router;









