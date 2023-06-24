const mongoose = require('mongoose');
const notesSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"UserModel",
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    

   
});
module.exports = mongoose.model("Notes",notesSchema);