const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/tamilLoft'

// Connect to MongoDB
mongoose.connect(uri, {
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  socketTimeoutMS: 45000 // Increase timeout to 45 seconds
});
const db = mongoose.connection;

// Event listeners for connection events
db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

module.exports = {db};

