const express = require('express');
const PORT = 4000;
const app = express();
const user = require("./routes/user_route");
const notes = require("./routes/notes_route");


const cors = require('cors');
const mongoose = require('mongoose');
const { MONGODB_URL } = require('./config');



mongoose.connect(MONGODB_URL);
mongoose.connection.on('connected',()=>{
    console.log("DB connected");
})

mongoose.connection.on('error',(error)=>{
    console.log("Some error while connecting to DB");
})


require('./models/user_model');
require('./models/notes_model');

app.use(cors());
app.use(express.json());
app.use(require('./routes/user_route'));
app.use(require('./routes/notes_route'));


app.listen(PORT,()=>
    console.log("Server Started"));

