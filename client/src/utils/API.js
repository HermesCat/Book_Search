import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const API_KEY = `${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`;



export default {
  searchBooks: function (query) {
    return axios.get(BASEURL + query);
  },

};
