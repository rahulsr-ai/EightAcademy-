import express from 'express'
import ConnectDb from './Config/MongoApp.js'


import Router from './Routes/HandleAppRoute.js'


// here we running our mongoDB server
ConnectDb()
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))  ;


app.use("/", Router);

app.use("/id", Router);

app.use("/auth" , Router )






// app.get("/form" ,(req,res) => { 
//     res.sendFile("form.html", {root: 'public'})
// } )



// app.post("/submit", (req,res) => { 
//     res.send('form submitted.....')
//     console.log(req.body);
    

// })


// ===========

// app.post("/data", (req,res) => { 
//     // res.send(' data form submitted.....')
    
    
//     res.redirect("/form")
//     console.log(req.body);
    

// })



const PORT = 9090
app.listen(PORT, () => { 
    console.log(`SERVER RUNNING ON ${PORT}`);
    
})



