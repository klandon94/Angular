const User = require("../models/User");
const Listing = require("../models/Listing");
const bcrypt = require("bcrypt");

class UserController{
	register(req,res){
		User.findOne({email:req.body.email},(err,user)=>{
			if(user){
				return res.json({
					message:"Invalid Credentials!",
					errors:errs
				});
			}else{
				let user = new User(req.body);

				bcrypt.hash(req.body.password,8,function(err,hash){
					if(err){
						return res.json({
							message:"Failed to hash password!",
							errors:err							
						});
					}else{
						user.password = hash;

						console.log(user);

						user.save(errs=>{
							if(errs){
								return res.json({
									message:"Failed to save user!",
									errors:errs
								});
							}else{
								req.session.uid = user._id;
								return res.json(user);
							}
						});
					}
				});				

			}	
		});
	}

	login(req,res){
		User.findOne({email:req.body.email},(err,user)=>{
			if(user){
				bcrypt.compare(req.body.password,user.password,function(err,result){
					if(result){
						req.session.uid = user._id;
						return res.json(user);
                    }
                    else return res.json({message:"Invalid Credentials!", errors:err});
				});				
            }
            else return res.json({message:"No user with this email was found!", errors:err});
		});
	}

	logout(req,res){
		req.session.uid = undefined;
		return res.status(200).json({message:"Logged out successfully."});
	}

	findById(req,res){
		User.findOne({_id:req.params.id})
		.populate({
			path:"listings",
			model:"Listing"
		})
		.exec((err,user)=>{
			if(user) return res.status(200).json(user);
			else return res.status(404).json({message:"Failed to populate listings for user", errors:err});
		})
	}

	session(){
		return res.json({});
	}
}

module.exports = new UserController();