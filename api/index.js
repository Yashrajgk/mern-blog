const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User')
const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog:eKsyB5m9TeyyKalG@cluster0.159iejn.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req,res) => {
    const{username, password} = req.body;
    try{
    const userDoc = await User.create({username,password}); 
    res.json(userDoc);
    } catch(e){
        res.status(400).json(e);
    }    
});

app.listen(3000);
