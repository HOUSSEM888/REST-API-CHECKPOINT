const express=require('express')
const app=express();
require('dotenv').config()
const mongoose = require('mongoose');
app.use(express.json())


const port=process.env.port;


mongoose.connect(process.env.DB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/user',require('./Routes/User.routes'))

app.listen(port,(err)=>{
    err?console.log('err', err):console.log(`Server is runnning on port :${port}`)
})

