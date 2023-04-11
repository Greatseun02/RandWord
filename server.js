const express = require("express")
const app = express()
const ejs = require("ejs")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
const { json } = require("body-parser")
app.set("view engine", "ejs")
app.use(express.static("public"))


    
 
app.get("/", function(req, res){
    res.render("index.ejs")
})

app.get("/start", async function(req, res){
    try{
        const data = await fetch("http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=t753bhr6xyoypmnq4pmx5z20l46bw242vulnm7ihx75dtp4sj")
        const jsonData = await data.json()
        res.render("start", {word:jsonData})
        }catch(e){
            console.log(e)
        }
    

    // res.render("start", {wordOfTheDay:word})
})

app.post("/search", async function(req, res){
    const wordToSearch = req.body.search
    try{
        const data = await fetch("http://api.wordnik.com/v4/words.json/?api_key=t753bhr6xyoypmnq4pmx5z20l46bw242vulnm7ihx75dtp4sj")
        const jsonData = await data.json()
        res.render("start", {word:jsonData})
        }catch(e){
            console.log(e)
        }
})

app.listen(3000, console.log("rest"))