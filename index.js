const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');

var routes= require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

const API_BASE_URL = 'https://api.johndoerailways.com';
const CACHE_TTL_SECONDS = 3600; // Cache expiration time in seconds (1 hour)
const ACCESS_CODE = porcess.env.ACCESS_CODE;

// Create a cache instance
const trainDataCache = new NodeCache({ stdTTL: CACHE_TTL_SECONDS });

// Helper function to filter trains fulfilling the allowed time window after delays
const filterAllowedTimeWindow = (departureTime) => {
  const twelveHoursFromNow = new Date().getTime() + 12 * 60 * 60 * 1000;
  return new Date(departureTime) <= new Date(twelveHoursFromNow);
};

// POST REST API to register all the user.
app.use('/api',routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
