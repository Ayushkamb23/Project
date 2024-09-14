

const mongoose=require("mongoose")
const { link } = require("../routes/main")
const informaitions=mongoose.Schema({

    Brandname:String,
    links:[{
        label:String,
        url:String,
    },],
});

module.exports=mongoose.model("informaition",informaitions)