const express = require('express')
const mongoose = require('mongoose')
const xeHoi = require('./xeHoiModel')
const port = 8080;
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/QLXH')
    .then(function () {
        console.log("Connect successfully")
    })
    .catch(function (err) {
        console.log("Connect successfully", + err)
    })
app.get('/', async (req, res) => {
    let xe = await xeHoi.find({});
    console.log(xe)
    res.json(xe)
}
)

app.get("/addXe" , async (req,res) =>{
    let kq = await xeHoi.insertMany([{
        ten:"MEC",
        nam:2020,
        giaBan:3000
    }])
    console.log(kq)
    let xe = await xeHoi.find({});
    console.log(xe)
    res.send(xe)
})

app.get("/deleteXe" , async (req,res) =>{
     await xeHoi.findByIdAndDelete({_id:"64235cee0bb3a544283d38e0"})
     let xe = await xeHoi.find({});
     console.log(xe)
     res.send(xe)
})

app.get("/updateXe" , async (req , res) =>{
    await xeHoi.updateOne({_id:"64235c08cc5ad792421c08c9"}, {$set:{ten:"TOYOTA"}} )
    let xe = await xeHoi.find({});
    console.log(xe)
    res.send(xe)
})

app.listen(8080, function () {
    console.log('listening on port:', + port)
})