const express = require('express'),
      router = express.Router(),
      Product = require("../models/productModel");


router.get("/newproduct", (req, res)=>{
    res.render('blog/newProduct')
});
router.post("/newproduct", (req ,res)=>{
    let name = req.body.data.name;
    let subtitle = req.body.data.subtitle;
    let price = req.body.data.price;

    let newProduct = { name:name, subtitle: subtitle, price:price };

    Product.create(newProduct)
        .then((newProduct)=>{
            console.log(newProduct);
            res.status(201).json(newProduct);
        })
        .catch((err)=>{
            console.log("====================ERROR==============")
            console.log(err);
            res.send(err);
        })
});
module.exports = router;