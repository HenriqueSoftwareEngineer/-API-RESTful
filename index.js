const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

// Conectar ao banco de dados
connectDB();

const app = express();

// Middleware para lidar com JSON




