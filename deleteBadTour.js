const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./models/tourModel');
const User = require('./models/userModel');
const Review = require('./models/reviewModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connection successful!');
    deleteBadTour();
  })
  .catch((err) => {
    console.log('DB Connection failed:', err);
    process.exit(1);
  });

async function deleteBadTour() {
  try {
    const res = await Tour.deleteOne({ _id: '6932884131deb8674e6d5c5c' });
    console.log('Delete result:', res);
  } catch (err) {
    console.log('Error deleting tour:', err);
  } finally {
    process.exit();
  }
}
