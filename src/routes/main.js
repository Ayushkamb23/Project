const express=require("express")
const route=require('express/lib/application')

const informaition=require("../models/informaition");
const signup=require("../models/signup");
const signin=require("../models/signin");
const contacts=require("../models/contacts");
const routes=express.Router()



routes.get("/", async (req,res)=>{
    //var id="66e3e539b5a95a28a4990625"
    const informaitions= await informaition.findOne({"_id":"66e4fe97585cef3b110dc358"})
     //console.log(informaitions)
   
   // console.log(shops)
  
    res.render("index",{
        informaitions:informaitions,
       
    })
})
routes.get("/contact", async(req,res)=>{
    const informaitions= await informaition.findOne({"_id":"66e4fe97585cef3b110dc358"})
    res.render("contact",{
        informaitions:informaitions
    })
})


routes.get("/shop_from", async(req,res)=>{
    const informaitions= await informaition.findOne({"_id":"66e4fe97585cef3b110dc358"})
    res.render("Shop",{
        informaitions:informaitions
    })
})

routes.get("/product", async(req,res)=>{
    const informaitions= await informaition.findOne({"_id":"66e4fe97585cef3b110dc358"})
    res.render("product",{
        informaitions:informaitions
    })
})

routes.get("/sign-up", async(req,res)=>{
    const informaitions= await informaition.findOne({"_id":"66e4fe97585cef3b110dc358"})
    res.render("sign-up",{
        informaitions:informaitions,
    });
});
routes.get("/sign-in",async(req,res)=>{
    const informaitions= await informaition.findOne({"_id":"66e4fe97585cef3b110dc358"})
    res.render("sign-in",{
        informaitions:informaitions,
    });
});

routes.post("/contact_form", async(request,response)=>{
    console.log("form is sumbit")
    console.log(request.body)


    try{
        const data= await contacts.create(request.body)
        response.redirect("/")


    }catch(e)
{
    console.log(e)
    response.redirect("/")
}


})

routes.post("/sign-up-form", async(request,response)=>{
console.log("forme is submit ")
console.log(request.body)
// save the data to db 
try{

const data= await signup.create(request.body)
console.log(data)
response.redirect("/")

}catch(e)
{
    console.log(e)
   response.redirect("/")
}

})


routes.post("/sign-in-form", async(request,response)=>{
console.log("forme is submit ")
console.log(request.body)
// save the data to db 
try{

const data= await signin.create(request.body)
console.log(data)
response.redirect("/")

}catch(e)
{
    console.log(e)
   response.redirect("/")
}
})




module.exports=routes