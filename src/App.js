import React, { Component } from 'react';
import './App.css';
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import SignUpPage from './components/SignUpPage' 
import LogIn from './components/LogIn' 
import Landing from './components/Landing'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'



export default  class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={ () => <Redirect to="/landing" /> } />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/products" component={ProductsList} />
          <Route exact path="/products/:id" component={ProductDetails} />
        </div>
      </Router>
    )
  }
}
