// <!-- File Name: book.js Author: Mahpara Rafia Radmy - Student ID: 301176893 - WebApp Name: Midterm2021 - Created on: October 30, 2021 -->

let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);