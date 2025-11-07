import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    URL:String,
    name: {type:String,required:true},
    author: {type:String,required:true},
    status: String,
    price:String,
    keywords:String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;