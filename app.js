
const express = require('express');
const app=express();
const path=require('path');

app.listen(process.env.PORT || 3000, ()=> {console.log("Servidor corriendo en puerto 3000")})
app.use(express.static('public')); 
app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,'/views/index.html'))})
app.get("/login",(req,res)=>{res.sendFile(path.join(__dirname,'/views/login.html'))})
app.get("/onboarding",(req,res)=>{res.sendFile(path.join(__dirname,'/views/onboarding.html'))})
