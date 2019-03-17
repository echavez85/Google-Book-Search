import React, { Component } from 'react';
import Delete from '../components/DeleteBtn';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';

class Books extends Component {
    state = {
      books: [],
      title: "",
      author: "",
      description: ""
    };

    componentDidMount() {
        this.loadBooks();
      }

    generateBooks = () => {
        API.getBooks()
        .then(res =>
            this.setState({ books: res.data, title: "", author: "", description: "" })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteOneBook(id)
        .then(res => this.generateBooks())
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        
    }