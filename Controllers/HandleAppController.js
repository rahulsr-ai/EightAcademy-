


const HandleGetDefault = (req, res) => { 
    res.sendFile( "pracIndex.html",  {root: "public"})
};

const HandlePostDefault = (req, res) => { 
    res.redirect('/');  
};



const HandleGetid= (req, res) => { 
    res.render('../views/app.ejs')
}



const HandlePostid = (req, res) => { 
    res.send("this is a id post response")
}


// APP AUTHENTICATION   

const HandleGetAuth = (req, res) => { 
    res.render("../views/AuthReplica/login.ejs")
}



const HandlePostAuth = (req ,res) => { 
   console.log('post route')
   res.redirect("/login")  
}






export { HandleGetDefault, HandlePostDefault, HandlePostid, HandleGetid, HandleGetAuth, HandlePostAuth  };





