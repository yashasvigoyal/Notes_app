const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const UserModel = require("../models/user_model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('../config');

//For registering a new user

router.post("/signup",(req,res)=>{
    const {username,email,password} = req.body;
    if(!username ||!email||!password){
       return res.status(400).json({
        error:"One or more mandatory fields are empty"
       });
    }
    UserModel.findOne({email:email})
    .then((userInDB)=>{
        if(userInDB){
            return res.status(500).json({
                error:"User with this email already registered"
            });
        }
 
    bcryptjs.hash(password,16)
    .then((hashedPassword)=>{
        const user = new UserModel({
            username,email,password:hashedPassword
        });
        user.save()
        .then((newUser)=>{
            res.status(201).json({
                result:"User signed up successfully"
            });
        }).catch((err)=>{
            console.log(err);
        })
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
    })
});

//Route for login
router.post("/login",(req,res)=>{
    const {username,password} = req.body;
    if(!password || !username){
        return res.status(400).json({
            error:"One or more mandatory fields are empty"
        });
    }
    UserModel.findOne({username:username})
    .then((userInDB)=>{
        if(!userInDB){
            return res.status(401).json({
                error: "Invalid Credentials"
            });
        }
        bcryptjs.compare(password,userInDB.password)
        .then((didMatch)=>{
            if(didMatch){
                const jwttoken = jwt.sign({_id:userInDB._id},JWT_SECRET);
                const userInfo = {"username":userInDB.username, "email":userInDB.email};
                res.status(200).json({
                    result:{token:jwttoken,user:userInfo}
                });
            }else{
                return res.status(401).json({
                    error:"Invalid Credentials"
                });

            }
        }).catch((err)=>{
            console.log(err);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
});
          




module.exports = router;