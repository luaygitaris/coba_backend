import 'dotenv/config.js'
import { config } from 'dotenv';
import express from 'express';
import pkg from 'pg';
import cors from 'cors';

// Load environment variables
config();

const app = express();
const port = process.env.PORT || 3000; // Use environment PORT or fallback to 3000
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,    
  host: process.env.DB_HOST, 
  password: process.env.DB_PASSWORD,  
  port: process.env.DB_PORT,
});

app.use(cors()); // CORS middleware before the routes
app.use(express.json()); // Express JSON middleware before the routes

// Routes
app.get('/', (req, res) => {
    res.send('API Working');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
