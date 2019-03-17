import axios from "axios";

export default {
    // function to get all books
    getBooks: => {
        return axios.get('/api/books');
    },

    // function to get one specific book
    getOneBook: => {
        return axios.get('/api/books/' + id);
    },

    // function to delete one specific book
    deleteOneBook: => {
        return axios.delete('/api/books/' + id);
    },

    // function to save a book to the db
    saveOneBook: => {
        return axios.post('/api/books', books);
    }
};
