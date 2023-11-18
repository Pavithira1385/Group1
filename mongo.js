const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/regidb')
.then(()=>{
    console.log('connected');
})
.catch(()=>{
    console.log('failed');
})
const newSchema=new mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    country:String,
    password:String,
    confpwd:String
})

const collection=mongoose.model("collection",newSchema)
module.exports=collection