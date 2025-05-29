const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Plan = require('./models/Plan');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to DB, seeding plans...");

    const plans = [
      {
        name: 'Basic Plan',
        price: 10,
        features: ['Feature A', 'Feature B'],
        duration: 30
      },
      {
        name: 'Pro Plan',
        price: 25,
        features: ['Feature A', 'Feature B', 'Feature C'],
        duration: 90
      },
      {
        name: 'Enterprise Plan',
        price: 50,
        features: ['All Features', 'Priority Support'],
        duration: 180
      }
    ];

    await Plan.deleteMany();
    await Plan.insertMany(plans);

    console.log("Seeding complete.");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Error seeding plans:", err);
    mongoose.disconnect();
  });
