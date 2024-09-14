const mongoose=require("mongoose")
 const contacts=mongoose.Schema({
    First:String,
    Last:String,
    Phone:String,
    Email:String,
    Adress:String,
    Country:String,
    Town:String,
    State:String,
    Zipcode:String,
    PAYPAL:String,
    Card:String,
    Expiration:String,
    CVC:String

 })
 module.exports=mongoose.model("Contactss",contacts)