const mongoose = require('mongoose');
const URI = "mongodb+srv://prathameshbothee:GIPSacXJs14Ygzdn@cluster0.2sbmsk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(URI).then(()=>{
    console.log('Connected to database');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});