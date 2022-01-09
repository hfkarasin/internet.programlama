const express = require('express'),
    router = express.Router();
let data = [
    {
        productName:"İphone 13",
        productSubtitle:"Apple 128 GB",
        price:"13000 TL",
        image:"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
        productName:"İphone 13 Pro",
        productSubtitle:"Apple 128 GB",
        price:"15000 TL",
        image:"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
        productName:"İphone 13 Pro Max",
        productSubtitle:"Apple 128 GB",
        price:"15000 TL",
        image:"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    }
]
router.get("/", (req, res)=>{
    res.render('index',{data : data})
});
router.get("/about", (req, res)=>{
    res.render('about')
});
router.get("/contact", (req, res)=>{
    res.render('contact')
});
router.get("/resume", (req, res)=>{
    res.render('resume')
});
router.get("/login", (req, res)=>{
    res.render('admin/login')
});
router.get("/signup", (req, res)=>{
    res.render('admin/signup')
});
module.exports = router;