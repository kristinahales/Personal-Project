import React from 'react';
import './Header.css'
class Header extends React.Component {
    render() {
        return (
            <header className='header-container'>
                <h2 className='header-text'>Discover</h2>

                <nav className='nav-container'>
                    <span className='nav-links'>Home</span>
                    <span className='nav-links'>Orders</span>
                    <span className='nav-links'>Logout</span>
                </nav>
            </header>
        )

    }
}

export default Header;