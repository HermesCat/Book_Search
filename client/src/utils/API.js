import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const API_KEY = `${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`;



export default {
  searchBooks: function(query) {
    return axios.get(BASEURL + query);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(savedBooks) {
    return axios.post("/api/books", savedBooks);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
