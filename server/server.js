const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false);
const PORT = 3000;
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

const start = async() => {
<<<<<<< HEAD
    await mongoose.connect('SECRET');
=======
    await mongoose.connect('mongodb+srv://boss:boss@pitt2023.61dxycp.mongodb.net/?retryWrites=true&w=majority');

>>>>>>> 109cc47 (fix function cuz sleepy at 1am)
    app.listen(PORT, (error) =>{
        if(!error)
            console.log("Server is Successfully Running, and App is listening on port "+ PORT)
        else 
            console.log("Error occurred, server can't start", error);
        }
    );
}

start();