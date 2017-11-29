
const express       = require('express')
const bodyParser    = require('body-parser')
let path            = require("path");

const app           = express()

const port          = process.env.PORT || 1337

let loggedIn = false;

app.use(express.static('assets'));

app.get("/login", (req, res)=>{
    loggedIn = true;
    res.redirect("/")   
    
})

app.get("/", (req, res) => {
    if(loggedIn)
        res.redirect("/dashboard")   
    else
        res.redirect("/login")   
    
})

app.get("/dashboard", (req, res) =>{

    if(loggedIn)
        res.sendFile(path.join(__dirname+'/home.html'));
    else
        res.sendFile(path.join(__dirname+'/login.html'));
    
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})