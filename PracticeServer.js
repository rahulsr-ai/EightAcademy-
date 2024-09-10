
import express, { Router, urlencoded } from 'express'
import pracDb from './Config/PracticeDb.js'


// PraUserModel schema
import PraUserModel from './Models/PracUser.js'

pracDb()
const app = express()



// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory where the view templates are stored
app.set('views', './views');



// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"))




app.get("/", (req, res) => {
    res.sendFile('pracIndex.html', { root: 'public' })

})



// creating user in the DataBase 
app.post("/create", async (req, res) => {

    const { name, email, Username } = await req.body

    
    
    
    let user = await PraUserModel.create({
        name: name,
        email: email,
        Username: Username
    })
    
    
    // const userexisting = await PraUserModel.findOne({ email: email });






    // if (userexisting) {

    // PraUserModel({
    //     name,
    //     email,
    //     Username
    // }).save()
        
    // } 
    // else
    // {
    //     res.redirect("/users")
    // }

    res.redirect("/users", {email: email})

    // res.send({
    //     success: true,
    //     message: 'user all ready exist...',
       
    // })
    // const User=await PraUserModel({

    //     name,
    //     email,
    //     Username

    // }).save()


   


})


// displaying all the user in the database
app.get("/users", async (req, res) => {

    // Fetching all users from the database
    const users = await PraUserModel.find();
    console.log(users);
   
    console.log(email);
    
    const userexisting = await PraUserModel.findOne({ email: 'rahul@gmail.com' });
    console.log(userexisting);

    

    res.render('displayAllUsers.ejs', { users: users })
})



// editing the user details
app.get("/edit/:userId", async (req, res) => {
    // finding the specific user in the database through _id
    let user = await PraUserModel.findOneAndUpdate({ _id: req.params.userId })
    res.render("EditFile.ejs", { user: user })

})



// here updating the user in the database
app.post("/update/:userId", async (req, res) => {
    const { name, email, Username } = req.body

    await PraUserModel.findOneAndUpdate({ _id: req.params.userId }, {
        name: name,
        email: email,
        Username: Username
    }, { new: true }  // returns the updated document
    )

    res.redirect('/users')
})





// removing specific user in the database 
app.get("/delete/:id", async (req, res) => {

    await PraUserModel.deleteOne({ _id: req.params.id })
    res.redirect("/")
})






const port = 7070
app.listen(port, () => {
    console.log(`app server is running on ${port}`);

})