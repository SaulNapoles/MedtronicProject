
const express       = require('express')
const bodyParser    = require('body-parser')
let path            = require("path");

const app           = express()

const port          = process.env.PORT || 1337

app.use(express.static('assets'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/home.html'));
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})