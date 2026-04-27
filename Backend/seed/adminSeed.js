// seed/adminSeed.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
require('dotenv').config();

const seedAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const existing = await User.findOne({ email: 'admin@fypcurator.com' });
  if (existing) {
    console.log('Admin already exists.');
    process.exit();
  }

  await User.create({
    name: 'Super Admin',
    email: 'admin@fypcurator.com',
    password: 'admin123456',   
    role: 'Admin',
  });

  console.log('✅ Admin created successfully!');
  process.exit();
};

seedAdmin();