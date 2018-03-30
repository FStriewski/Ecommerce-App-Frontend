import React, { Component } from 'react';
import './App.css';
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import SignUp from './components/SignUp' 
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'



export default  class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/products" component={ProductsList} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/" render={ () => <Redirect to="/products" /> } />
        </div>
      </Router>
    )
  }
}
