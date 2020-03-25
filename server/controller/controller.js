const Product = require('../models/model.js');
module.exports = {
    index: function(req,res){
        Product.find()
        .then(product=>{
            
            res.json(product);
        })    
        
        
        .catch(err=>{
            res.json(err);
        })
        
    },
    
    create:function(req,res){
        let product = new Product()
        product.name = req.body.name;
        product.qty = req.body.qty;
        product.price = req.body.price;
        product.save()
            .then(movie=>{
                res.json(movie);
            })
            .catch(err => {
                bad=[];
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    bad.push(err.errors[key].message);
                }
                res.json(bad);
            })
    },
    show:function(req,res){
        Product.findOne({_id:req.params.id})
        .then(product=>{
            res.json(product);
        })
        .catch(err => {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.json(err);
        })
    },
    delete: function(req,res){
        Product.remove({_id: req.params.id})
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.json(err);
        })
    },
    update:function(req,res){
        console.log(req.params.id)
        Product.findOne({_id:req.params.id})
            .then(product=>{
                product.name = req.body.name;
                product.qty = req.body.qty;
                product.price = req.body.price;
                return product.save()
                
            })
            .then(product=>{
                res.json(product);
            })
            .catch(err => {
                bad=[];
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    bad.push(err.errors[key].message);
                }
                res.json(bad);
            })
    },

    

}