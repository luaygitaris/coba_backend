import 'dotenv/config.js'
import { config } from 'dotenv';
import express from 'express';
import pkg from 'pg';
import cors from 'cors'


const app = express();
const port = 3000;
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,    
  host: process.env.DB_HOST, 
  password: process.env.DB_PASSWORD,  
  port: process.env.DB_PORT,
});


config();

app.use(cors());

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT} PORT`));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Working');
});