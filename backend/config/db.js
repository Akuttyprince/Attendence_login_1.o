const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

const uri = process.env.MONGO_URI; // Fetch MONGO_URI from .env

const connectDB = async () => {
  try {
    
    if (!uri) {
      throw new Error('MONGO_URI is not defined in the .env file');
      
    }
    
    await mongoose.connect(process.env.MONGO_URI, {
      
      
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
  //console.log("Error",process.env.MONGO_URI);
};

//console.log('Environment Variables Loaded:', process.env);



module.exports = connectDB;
