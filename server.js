// require('dotenv').config()
const express = require('express') ; 

const app = express() ; 

const port = 4000 ; 

 
app.get('/', (req, res)=>{
    res.send("Hello Welcome") 
}) 

app.get('/twitter', (req, res)=>{
    res.send('<h1>github.com/Sumit332003/</h1>')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Sumit</h1>')
})

app.get('/code', (req, res)=>{
    res.send('<h1>code with Hitesh</h1>')
})

app.listen(port,()=>{
    console.log(`server runing at http://localhost:${port}`)
}) 