const express = require('express')

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'pug')
const port = process.env.PORT || 3001
app.listen(port ,()=>{
    console.log("active on port - ", port)
})


app.get('',(req,res,next)=>{
    res.render('index')
})