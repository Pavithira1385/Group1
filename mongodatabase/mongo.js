const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/regidb')
.then(()=>{
    console.log('Connected');
})
.catch(()=>{
    console.log('Failed');
})

const newSchema=new mongoose.Schema({
    msg:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    }
})

const collection=mongoose.model("collection",newSchema)

module.exports=collection