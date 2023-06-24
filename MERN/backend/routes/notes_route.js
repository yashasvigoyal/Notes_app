const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const UserModel = require("../models/user_model");
const Notes = require("../models/notes_model");
const protectedRoute = require("../middleware/protectedResource");

//For adding a new note
router.post("/addnotes",protectedRoute,(req,res)=>{
    const {description} = req.body;
    if(!description){
        return res.status(400).json({
            error:"Field is empty"
        });
    }
    req.user.password = undefined;
    const notesObj = new Notes({
        user:req.user,description: description
    });
    notesObj.save()
    .then((newNote)=>{
        res.status(201).json({
            note:newNote

        });
    }).catch((error)=>{
        console.log(error);
    })
   
    

});

//For getting all notes
router.get('/allnotes',protectedRoute,(req,res)=>{
    Notes.find({user:req.user._id})
    .populate("user","_id username")
    .then((dbNotes)=>{
        res.status(200).json({
            notes:dbNotes
        })
    })
    .catch((error)=>{
        console.log(error);
    })
});


module.exports = router;