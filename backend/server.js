import mongoose from 'mongoose';
import express from "express";
import cors from "cors";
import Book from './models/book.js';
import dotenv from "dotenv";


dotenv.config();

// connect mongodb// bukufairlibrary // 5481shuvo_db_user
// mongodb+srv://5481shuvo_db_user:bukufairlibrary@cluster0.3y5escz.mongodb.net/bookStore?appName=Cluster0
const MONGO_URI = process.env.MONGO_URI;
;
await mongoose.connect(MONGO_URI)
.then(
    (resolve) => {
        console.log("mongodb connected");
    }
).catch(
    (reject) =>{
        console.log("unable to connect");
    }
)

//creating express app

const app = express();
app.use(cors());
app.use(express.json());


//add new book

app.post("/allbooks",async(req ,res)=>{
  try{
    const newbook = new Book(req.body);
    await newbook.save();
    res.status(201).json(newbook);

  }catch (error){
    console.error(error);
    res.status(500).json({ message: "Error adding book" });
  }
});

//get books
app.get("/allbooks",async(req,res)=>{
  const abooks=await Book.find();
  res.json(abooks);
})

// default
app.get("/", (req, res) => {
  res.send(" BukuFair Backend is Running Successfully!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));




// app.listen(5000, () => console.log("Backend running on port 5000"));




// async function addBook() {
//   const book = new Book({
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925
//   });

//   await book.save();
//   console.log("Book added!");
// }

// addBook();

