import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import CheeseburgerMenu from 'cheeseburger-menu';
import {connect} from 'react-redux';
import {logout} from './../../redux/userReducer';



class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            menuOpen: false,
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    logout = () => {
        this.props.logout();
    }

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
                
                <CheeseburgerMenu isOpen={menuOpen} closeCallback={this.closeMenu}>
                    <div>
                        <div className='hamburger-links'><Link to="/" onClick={this.closeMenu} >Home</Link></div>
                        <div className='hamburger-links'><Link to="/inventory" onClick={this.closeMenu}>Inventory</Link></div>
                        <div className='hamburger-links'><Link to="/projects" onClick={this.closeMenu}>Projects</Link></div>
                        <div className='hamburger-links'><Link to="/orders" onClick={this.closeMenu}>Order</Link></div>
                        <div className='hamburger-links'><Link to="/login" onClick={this.logout}>Logout</Link></div>
                    </div>
                </CheeseburgerMenu>
                <h1 className='header-text'>Mini Masterpieces</h1>
                
                <h1 className='logo'>MM</h1>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {logout})(Header);


