
import React, { PureComponent } from 'react'
import {withRouter} from 'react-router'
import LogInPage from '../userHandling/LogInPage'
import LogOutPage from '../userHandling/LogOutPage'
import SignUpPage from '../userHandling/SignUpPage'
import ProductsList from '../ProductsList'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, MenuItem, Nav, NavDropdown,  } from 'react-bootstrap';


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

      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <a className="navbar-brand" href="#">Navbar</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div class="collapse navbar-collapse" id="navbarNavDropdown">
      //     <ul class="navbar-nav">
      //       <li class="nav-item dropdown">
      //         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //           Dropdown link
      //     </a>
      //         <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      //           <a class="dropdown-item" href="#">Action</a>
      //           <a class="dropdown-item" href="#">Another action</a>
      //           <a class="dropdown-item" href="#">Something else here</a>
      //         </div>
      //       </li>
      //     </ul>
      //   </div>
      //   </nav>
//     )
//   }
// }

    // <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar className={"teal lighten-2"}>
    //       <IconButton className={classes.menuButton} color="teal lighten-2" aria-label="Menu">
    //         <MenuIcon />
    //       </IconButton>

    //       <Typography variant="title" color="" className={classes.flex}>
    //         <Link to={'/products'} component={ProductsList} className="prodcuts">Shop</Link>
    //       </Typography>
    //       <ul id="nav-mobile" className="right hide-on-med-and-down white-text">
    //         <li><Link to={'/login'} component={LogInPage} className="login">Log In</Link></li>
    //         <li><Link to={'/logout'} component={LogOutPage} className="logout">Log Out</Link></li>
    //         <li><Link to={'/signup'} component={SignUpPage} className="signup">Sign Up</Link></li>
    //       </ul>

          {/* {
            location.pathname.indexOf('signup') > 0 &&
            <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
          }
          {
            location.pathname.indexOf('login') > 0 &&
            <Button color="inherit" onClick={() => history.push('/signup')}>Sign up</Button>
          }
          {
            location.pathname.indexOf('games/') > 0 &&
            <Button color="inherit" onClick={() => history.push('/games')}>All Games</Button>
          }
          {
            /games$/.test(location.pathname) &&
            <Button color="inherit" onClick={() => history.push('/logout')}>Log out</Button>
    //       } */}
    //     </Toolbar>
    //   </AppBar>
    // </div>




