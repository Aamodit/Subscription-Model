const express = require('express');
const app = express();
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const planRoutes = require('./routes/planRoutes');

app.use(express.json());

app.use('/subscriptions', subscriptionRoutes);
app.use('/plans', planRoutes);

module.exports = app;
