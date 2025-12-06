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
    checkTours();
  })
  .catch((err) => {
    console.log('DB Connection failed:', err);
    process.exit(1);
  });

async function checkTours() {
  try {
    const tours = await Tour.find();
    console.log(`Checking ${tours.length} tours...`);

    let foundIssue = false;
    tours.forEach((tour) => {
      if (!tour.imageCover) {
        console.log(
          `❌ Tour missing imageCover: ID=${tour._id}, Name="${tour.name}"`
        );
        foundIssue = true;
      }
    });

    if (!foundIssue) {
      console.log('✅ All tours have an imageCover.');
    }
  } catch (err) {
    console.log('Error querying tours:', err);
  } finally {
    process.exit();
  }
}
