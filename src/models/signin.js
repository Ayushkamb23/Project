
const mongoose=require('mongoose')


const signin=mongoose.Schema({
    Lock:String
})
module.exports=mongoose.model("signins",signin)
