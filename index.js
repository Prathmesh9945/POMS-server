const express = require('express');
const app = express();
require('dotenv').config();
const {ConnectDB }=require('./Config/ConnectDB')

const PORT = process.env.PORT || 3001;


app.get('/',(req,res)=>{
    return res.send("Welcome to POMS Server")
})

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);

})
ConnectDB();