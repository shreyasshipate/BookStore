import cors from 'cors';
import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from './config.js';
import booksRoute from "./routes/booksRoute.js";

const app = express()
app.use(express.json())


app.use(cors())
//Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );


app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('welcome to Book_Store');
})

app.use('/books',booksRoute);

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("connected to database successfully")
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error);

})