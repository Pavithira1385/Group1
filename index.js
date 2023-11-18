const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const collection=require('./models/mongo')

const app=express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

//mongoose.connect("mongodb://127.0.0.1:27017/customer")
app.get("/",async(req,res)=>{
  try{
    const allData=await collection.find({})
    res.json(allData)
  }
  catch(e)
  {
    res.json("fail")
    console.log(e)
  }
})
app.post("/",async(req,res)=>{
const {name,email,contact,country,gender,idnumber,password,confpwd}=req.body
const data={
  name:name,
  email:email,
  contact:contact,
  country:country,
  gender:gender,
  idnumber:idnumber,
  password:password,
  confpwd:confpwd
}
try{
  await collection.insertMany([data])
  const allData=await collection.find({})
  res.json(allData)
}
catch(e)
{
  res.json("fail")
    console.log(e)
}
})




app.listen(8000,()=>{
    console.log("Port connected")
})
