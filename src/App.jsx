import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './views/Login/Login';
import Parent from './views/Parent/Parent';
import Category from './views/Category/Category';

class App extends Component {
  render() {
    return (
      <main className="site-container">
        <Router basename="/">
          <div>
            <Route exact path="/"  component={Login} />
            <Route exact path="/parent/:parentId" component={Parent} />
            <Route exact path="/category/:categoryId" component={Category} />
          </div>
        </Router>
      </main>
    );
  }
}

export default App;
