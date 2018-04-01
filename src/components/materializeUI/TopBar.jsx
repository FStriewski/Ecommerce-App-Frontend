import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import {withRouter} from 'react-router'
import LogInPage from '../userHandling/LogInPage'
import LogOutPage from '../userHandling/LogOutPage'
import SignUpPage from '../userHandling/SignUpPage'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes, location, history } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={"teal lighten-2"}>
          <IconButton className={classes.menuButton} color="teal lighten-2" aria-label="Menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="title" color="inherit" className={classes.flex}>
            Shop
          </Typography>
          <ul id="nav-mobile" className="right hide-on-med-and-down white-text">
            <li><Link to={'/login'} component={LogInPage} className="login">Log In</Link></li>
            <li><Link to={'/logout'} component={LogOutPage} className="logout">Log Out</Link></li>
            <li><Link to={'/signup'} component={SignUpPage} className="signup">Sign Up</Link></li>
          </ul>

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
          } */}
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withRouter(withStyles(styles)(ButtonAppBar));
