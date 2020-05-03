import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

const NavBar = () => {
  return (
    <div>
        <div className='NavBar-navBar'>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='title' color='inherit' className='NavBar-flex'>
                        <a href='#' className='Navbar-navBarIconLink'>Contract Generator</a>
                    </Typography>
                  
                </Toolbar>
            </AppBar>
        </div>
    </div>
  );
}

export default NavBar;

/* Code for future nav links:
<div className='Navbar-navLinks'>
<Button color='inherit' className='NavBar-navLink'><Typography color='inherit'>About Us</Typography></Button>
<Button color='inherit' className='NavBar-navLink'><Typography color='inherit'>Contact</Typography></Button>
</div>
*/

