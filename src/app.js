const express=require("express");
const hbs= require("hbs")
const con = require("consolidate")


const app =express();

const bodyParser=require('body-parser')

const routes=require('./routes/main');
const mongoose  = require("mongoose");
const informaition=require("./models/informaition")




//app.use('static',express.static("public"))

app.use(bodyParser.urlencoded({
  extended:true
}))




app.use(express.static('public'))
app.use('',routes)




// templet 
//app.engine('html', con.swig)
app.set("view engine",'hbs')
app.set("views","views");
hbs.registerPartials("views/partials")




app.get("/",(require,response)=>{
response.send("nice")
})

app.get("/views/partials",(require,response)=>{
  response.send("nice")
  })



// db connections
var uri = "mongodb://127.0.0.1:27017/QUAD_PROJECT";
// mongoose.connect("mongodb://127.0.0.1:27017/NODE_PROJECT", ()=>{
//   console.log("connected")
// });

mongoose.connect(uri).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  console.log("Connect")

 
  /*informaition.create({
   Brandname:"3legant.",
    links:[
      {
        label:"Home",
        url:"/"

     },
     {
      label:"Shop",
      url:"/"

     },

     {
     label:"Product",
     url:"/"
     },
     {
      label:"Contact US",
      url:"/"
     },
     {
      label:"singn-in",
      url:"/"

     },
     {
      label:"singn-up",
      url:"/"
     }
    ]

  })*/

  });



  





app.listen(process.env.PORT |2323,()=>{
    console.log("server started")
});