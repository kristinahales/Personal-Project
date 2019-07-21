import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import CheeseburgerMenu from 'cheeseburger-menu';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            menuOpen: false,
            user: {},
            redirect: false

        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    // componentDidMount() {

    // }
    openMenu() {
        this.setState({
            menuOpen: true
        })
    }

    closeMenu() {
        this.setState({
            menuOpen: false
        })
    }

    render() {
        let {menuOpen} = this.state
        return (
            <header className='header-container'>
                <i onClick={menuOpen ? this.closeMenu : this.openMenu} id='hamburger' className="fas fa-bars"></i>
                <h2 className='header-text'>Discover</h2>
                
                <CheeseburgerMenu isOpen={menuOpen} closeCallback={this.closeMenu}>
                    <div>
                        <div className='hamburger-links'><Link to="/" onClick={this.closeMenu} >Home</Link></div>
                        <div className='hamburger-links'><Link to="/inventory" onClick={this.closeMenu}>Inventory</Link></div>
                        <div className='hamburger-links'><Link to="/projects" onClick={this.closeMenu}>Projects</Link></div>
                        <div className='hamburger-links'><Link to="/create" onClick={this.closeMenu}>Create</Link></div>
                        <div className='hamburger-links'><Link to="/orders" onClick={this.closeMenu}>Orders</Link></div>
                        <div className='hamburger-links'><Link to="/logout" onClick={this.closeMenu}>Logout</Link></div>
                    </div>
                </CheeseburgerMenu>
                                
                <nav className='nav-container'>
                    <Link to='/' className='nav-links'>Home</Link>
                    <Link to='/orders' className='nav-links'>Orders</Link>
                    <Link to='/logout' className='nav-links'>Logout</Link>
                </nav>

            </header>
        )
    }
}

export default Header;


