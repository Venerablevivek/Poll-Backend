// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import PollRoutes from './routes/pollRoutes.js'

dotenv.config();
const app = express();

const PORT = process.env.PORT || 6600;

app.use(bodyParser.json());
app.use(express.json());

app.use('/api',PollRoutes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Server is up and running..."
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
});

