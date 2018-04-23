
import React, { PureComponent } from 'react'

import LogInPage from '../userHandling/LogInPage'
import LogOutPage from '../userHandling/LogOutPage'
import SignUpPage from '../userHandling/SignUpPage'
import ProductsList from '../ProductsList'
import { Link } from 'react-router-dom'
import * as combine from "lodash/fp/compose"

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import Dehaze from '@material-ui/icons/Dehaze'

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

class TopBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to={'/products'} component={ProductsList} className="products">WebShop 3000</Link>
            </Typography>
          
              <div>  
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <Dehaze />
              </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}><Link to={'/login'} component={LogInPage} className="login">Log In</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to={'/logout'} component={LogOutPage} className="logout">Log Out</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to={'/signup'} component={SignUpPage} className="signup">Sign Up</Link></MenuItem>
                </Menu>
              </div>
          
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TopBar);