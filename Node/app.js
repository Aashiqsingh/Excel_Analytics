const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({
    origin:"https://excel-analytics-ruddy.vercel.app",
    credentials: true,
}));
app.use(express.json());


const userRoutes = require("./Routes/UserRoutes");
app.use("/user",userRoutes);







mongoose.connect('mongodb://127.0.0.1:27017/Excel_Analytics').then((res)=>{
    console.log("Database connected....");
}).catch((err)=>{
    console.log(err);
})

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})