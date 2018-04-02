
import React, { PureComponent } from 'react'

import LogInPage from '../userHandling/LogInPage'
import LogOutPage from '../userHandling/LogOutPage'
import SignUpPage from '../userHandling/SignUpPage'
import ProductsList from '../ProductsList'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav,   } from 'react-bootstrap';


 export default class TopBar extends PureComponent {

   render() {
     return (
       <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
             <Link to={'/products'} component={ProductsList} className="products">WebShop</Link>
            </Navbar.Brand>
          </Navbar.Header>
  
         <Nav pullRight>
            <NavItem eventKey={1}>
             <Link to={'/login'} component={LogInPage} className="login">Log In</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
             <Link to={'/logout'} component={LogOutPage} className="logout">Log Out</Link>
            </NavItem>
           <NavItem eventKey={3} href="#">
             <Link to={'/signup'} component={SignUpPage} className="signup">Sign Up</Link>
            </NavItem>
          </Nav>
 
        </Navbar>
     )
    }
  }
