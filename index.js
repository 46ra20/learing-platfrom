const express = require('express');
const cors = require('cors');
const app = express();
port = 5000;

const categoryData = require('./data/category.json');

app.use(cors());

app.get('/category',(req, res) =>{
    res.send(categoryData)
})

app.listen(port, ()=>{
    console.log(`Express is running in port ${port}`)
})