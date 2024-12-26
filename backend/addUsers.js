const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const User = require('./models/User'); // Adjust path if necessary
const bcrypt = require('bcryptjs')
const connectDB = require('./config/db');
connectDB(); // Connect to the database

//console.log('MONGO_URI in addUsers.js:', process.env.MONGO_URI);


const seedUsers = async () => {
  try {
    await User.deleteMany(); // Clear existing users

    const users = [
      { username: 'admin', password: await bcrypt.hash('admin123', 10), role: 'Admin' },
      { username: 'hod', password: await bcrypt.hash('hod123', 10), role: 'HOD' },
      { username: 'staff', password: await bcrypt.hash('staff123', 10), role: 'Staff' },
      { username: 'student', password: await bcrypt.hash('student123', 10), role: 'Student' },
    ];

    await User.insertMany(users);
    console.log('Test users added');
    process.exit();
  } catch (error) {
    console.error('Error adding test users:', error.message);
    process.exit(1);
  }
};
  
   


  seedUsers(); 

