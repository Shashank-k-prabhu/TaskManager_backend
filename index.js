const connectToMongo = require('./database/db');
const express = require('express');
connectToMongo();


const app = express();
const port= 5000;

app.use(express.json());

app.listen(port,()=>{
  console.log(`Task Manager Application running on port ${port}`)
  
})