const express = require('express'),
      User = require('../models/userModel'),
      passport = require("passport"),
      router = express.Router();


let adminActions = [
    {
        actionId:1,
        actionName:"changeHomeImage",
        displayName:"Change Product"
    },
    {
        actionId:2,
        actionName:"addNewProduct",
        displayName:"Add New Product"
    },
    {
        actionId:3,
        actionName:"listAllProduct",
        displayName:"List All Product"
    },


]

router.get("/signup", (req, res)=>{
    res.render('admin/signup')
});
router.get("/admin", (req, res)=>{
    res.render('admin/admin',{adminActions:adminActions})
});
router.post("/signup",(req, res)=>{
    let newUser = new User({username:req.body.username});
    User.register(newUser, req.body.password, (err, User)=>{
        if(err){
            console.log(err);
            res.redirect("/signup");
        }
        passport.authenticate("local")(req, res, ()=> {
            res.redirect("/");
        });
    })

});
router.get("/login", (req, res)=>{
    res.render('admin/login',{adminActions:adminActions})
});
router.post("/login", passport.authenticate("local",
    {
        successRedirect:"/",
        failerRedirect:"/login"
    }),(req, res)=>{});
router.get("/logout", (req, res)=>{
    req.logout();
    res.redirect("/");
})

module.exports = router;