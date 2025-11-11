import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    URL:{type:String,required:true},
    name: {type:String,required:true},
    author: {type:String,required:true},
    status: {type:String,required:true},
    price:{type:String,required:true},
    keywords:{type:String,required:true},
});

const Book = mongoose.model("Book", bookSchema);

export default Book;