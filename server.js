const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const postsRoute= require('./routes/posts')

require('dotenv').config();

const app= express();
const port= process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/posts",postsRoute);

app.listen(port,() => console.log(`App is live on: ${port}`));