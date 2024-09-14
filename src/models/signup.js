const mongoose=require('mongoose')


const signup=mongoose.Schema({
    Name:String,
    User:String,
    Email:String,
    Lock:String
})
module.exports=mongoose.model("signs",signup)
