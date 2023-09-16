const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false);
const PORT = 3000;
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

const start = async() => {
    await mongoose.connect('');

    app.listen(PORT, (error) =>{
        if(!error)
            console.log("Server is Successfully Running, and App is listening on port "+ PORT)
        else 
            console.log("Error occurred, server can't start", error);
        }
    );
}

start();