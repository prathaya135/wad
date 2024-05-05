require('dotenv').config()
const express=require('express');
const path=require('path');
const mongoose= require('mongoose');

mongoose.connect(process.env.URL).then((ans)=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err);
})

const collection=require('./schema');
const app=express();

app.use(express.json());


app.get('/',(req,res)=>{
    collection.find().then((all_data)=>{
        res.send(all_data);
    }).catch((err)=>{
        // console.log(err);
        res.send("NO DATA");
    })
});
app.post('/adduser',async(req,res)=>{
    collection.insertMany(req.body).then((data)=>{
        // console.log("Data Inserted!!")
        res.send("Data Inserted");
    }).catch((err)=>{
        console.log("Data Not Inserted");
        // res.send("Data Not Inserted")
    })
    res.send(req.body);
})

app.delete('/delete',(req,res)=>{
    // res.send("enter the name to delete");
    collection.findOne(req.body).then((data)=>{
        collection.deleteOne({_id:data._id}).then((data)=>{
            if(data.deletedCount===0){
                // console.log("Data Not Found");
                res.send("Data Not Found");
            }else{
                // console.log('Data Deleted!!');
                res.send('Data Deleted');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        // console.log(err);
        res.send("Data Not Found");
    })
})

app.put('/update',(req,res)=>{
        collection.updateOne(req.body.filter,req.body.update).then((data)=>{
            if(data.matchedCount===0){
                // console.log("Data Not Found");
                res.send("Data Not Found");
            }else{
                // console.log('Data Deleted!!');
                res.send('Data Updated');
            }
        }).catch((err)=>{
            console.log(err);
        })
})

app.listen(process.env.PORT,(err)=>{
    if(err) throw err;
    console.log('server connected!!!')
})
