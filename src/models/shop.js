const mongoose=require("mongoose")

const shop=mongoose.Schema({
    title:String,
        
    
})
module.exports=mongoose.model("shops",shop)
