require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = 8080;

module.exports = { MONGODB_URI, PORT };