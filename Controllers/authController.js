
import { hashPassword, passwordCompare } from '../Helpers/PasswordHashed.js';
import { User } from '../Models/User.model.js';
import JWT from 'jsonwebtoken'

export const registerController = async (req, res) => {

    try {

        let { name, email, password, phone, address } = req.body;

        if (!name) {
            return res.send({ error: 'name is required' })
        }
        if (!email) {
            return res.send({ error: 'email is required' })
        }
        if (!password) {
            return res.send({ error: 'password is required' })
        }
        if (!address) {
            return res.send({ error: 'address is required' })
        }
        if (!phone) {
            return res.send({ error: 'phone is required' })
        }

        // CHEKING IS THERE ANY USER IN THE DB WIH THE PROVIDED EMAIL 
        const existinguser = await User.findOne({ email });


        // IF USER EXIST 
        if (existinguser) {

            return res.status(200).send({
                success: true,
                message: 'users allready registerd'
            })

        }

        const hashedPassword = await hashPassword(password);

        // Here we creating new user in the MONGO DATABASE 
        const user = await new User({ name, email, password: hashedPassword, phone, address,role:0 })
        await user.save()

        return res.status(200).send({
            success: true,
            message: 'users registerd'
        })


    }
    catch (error) {
        res.status(500).send(
            {
                success: false,
                message: 'error in registercontroller',
                error: error.message
            }
        )
    }
}




// ===============================  CONTROLLER FOR LOGIN ============================


export const authLogin = async (req, res) => {



    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "invaild email or password",
            })


        }

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send({
                success: false,
                message: "wrong email id"
            })
        }

        let match = await passwordCompare(password, user.password)

        if (!match) {
            return res.status(401).send({
                success: false,
                message: "wrong password"
            })
        }


        const token=await JWT.sign({_id:user._id},process.env.secret_key,{
            expiresIn:"7d"
        })


        res.status(200).send({
            success: true,
            message: "loged in successfully",
            user: {
                name: user.name,
                email: user.email
            }
            ,token
        })

    }


    catch (error) {
        console.log(error)
        res.send({
            success: false,
            message: "error in authlogin",
            error
        })
    }

}

export const usertest=async(req,res)=>{
try {
    res.send("protected routes")
} catch (error) {
    console.log(error)
    console.log("error in usertest")
}
}

