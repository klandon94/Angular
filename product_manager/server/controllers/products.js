const Product = require("../models/product");

class ProductController{
    findAll(req,res){
        Product.find({}, (err,products)=>{
            if (err) return res.json({message:"Couldn't find all products", error:err})
            else return res.json(products);
        })
    }
    findOne(req,res){
        Product.findById(req.params.id, (err,product)=>{
            if (err) return res.json({message:"This product does not exist", error:err});
            else return res.json(product);
        })
    }
    create(req,res){
        let product = new Product(req.body);
        product.save(err =>{
            if (err) return res.json({message:"Could not create product", error:err});
            else return res.json(product);
        })
    }
    edit(req,res){
        Product.findById(req.params.id, (err,product)=>{
            if (err) return res.json({message:"This product does not exist", error:err});
            product.set(req.body);
            product.save((err, updatedProduct) =>{
                if (err) return res.json({message:"Could not edit product", error:err});
                else return res.json(updatedProduct);
            })
        })
    }
    delete(req,res){
        Product.findById(req.params.id, (err,product)=>{
            if (err) return res.json({message:"This product does not exist", error:err});
            else{
                Product.remove({_id:req.params.id}, err=>{
                    if (err) return res.json({message:"Could not remove product", error:err});
                    else return res.json({message:"Successfully removed product", product:product});
                })
            }
        })
    }
}

module.exports = new ProductController();