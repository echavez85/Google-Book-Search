import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Books from './pages/Books';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import API from './utils/BookSearchAPI'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;