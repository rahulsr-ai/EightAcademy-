import express from 'express'
import dotenv from 'dotenv'
import dbconnect from './Config/db.js';
// import { User } from './Models/User.model.js';
import router from './Routes/authRoute.js';
import cors from 'cors'


dbconnect()
let PORT = process.env.PORT || 5600;
dotenv.config();
let app = express();

app.use(cors())
app.set('view engine', 'ejs')
app.set('views', './views')




// Middleware to parse JSON bodies
app.use(express.json()); // This is crucial for req.body to be populated


app.use("/api/v1/auth", router)


app.get("/", (req, res) => {
    res.send('default page')
})







// app.get("/random", (req, res) => {
//     let data = {
//         name: 'something',
//         password: 'something'
//     };
//     res.json(data); 
// })




app.get("/login", (req, res) => {
    res.render("AuthReplica/login.ejs")
})




app.listen(PORT, () => {
    console.log(`your server runing port no ${PORT} `)
})




