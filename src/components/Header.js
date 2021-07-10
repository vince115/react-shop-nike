import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//--icon--//
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './Context'



export class Header extends React.Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        const { toggle } = this.state;
        const cart = this.context;
        return (
            <>
                <AppBar position="static" style={{ backgroundColor: 'darkorange', color: 'white' }}>
                    <Toolbar >
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.menuToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="logo">
                            <Link to="/">
                                <svg class="pre-logo-svg" height="60px" width="60px" fill="#FFF" viewBox="0 0 69 32"><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg>
                                </Link>
                        </Typography>
                        <nav>
                            <ul className={toggle ? "toggle" : ""}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/product">Product</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/login">Login / Register</Link></li>
                                <li className="close" onClick={this.menuToggle}>
                                    <CloseIcon />
                                </li>
                            </ul>
                            <div className="nav-cart">
                                <span>{cart.length}</span>
                                <Link to="/cart"><ShoppingCartIcon style={{ color: 'white' }} /></Link>
                            </div>
                        </nav>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}
export default Header