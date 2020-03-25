const product = require('../controller/controller.js');
module.exports = function(app){
    app.get('/products',(req,res)=>{
        product.index(req,res);
    })
    app.post('/product',(req,res)=>{
        console.log(req.body)
        product.create(req,res);
    })
    app.post('/review/:id',(req,res)=>{
        product.create_review(req,res);
    })
    app.get('/product/:id',(req,res)=>{
        product.show(req,res);
    })

    app.put('/product/:id',(req,res)=>{
        console.log(req.body)
        product.update(req,res);
    })
    app.delete('/product/:id',(req,res)=>{
        product.delete(req,res);
    })
    

}