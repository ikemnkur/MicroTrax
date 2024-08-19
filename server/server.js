require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./db');
const { User, Transaction, WalletReload, WithdrawalRequest, Message } = require('./models');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
// ... (add your routes here)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
