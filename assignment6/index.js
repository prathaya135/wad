const express=require('express');
const path=require('path');
const PORT= 3000;
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('index',{ message: 'Hello, World! This is my server.' });
})

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('connected successfully'); 
})


