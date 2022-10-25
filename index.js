const express = require('express');
const cors = require('cors');
const app = express();
port = 5000;

const categoryData = require('./data/category.json');
const courseData = require('./data/fakeData.json');

app.use(cors());

app.get('/course/:categoryId',(req, res)=>{
    const categoryId = req.params.categoryId;
    const findData = courseData.filter(course => categoryId === course.category_id )
    console.log(req.params.categoryId);
    if(categoryId === '07'){
        res.send(courseData)
    }
    else{
        res.send(findData)
    }
})

app.get('/course/details/:courseId',(req, res) => {
    const courseId = req.params.courseId;
    const findData = courseData.find(course => course.course_id === courseId);
    if(findData){
        res.send(findData)
    }
})

app.get('/category',(req, res) =>{
    res.send(categoryData)
})

app.listen(port, ()=>{
    console.log(`Express is running in port ${port}`)
})