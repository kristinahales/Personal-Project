import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import './DashboardPictures.css';
import './Dashboard.css'
import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        // if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        return (
            <div>
                <div className='main-dashboard-container'>
                    <div className='collage'></div>
                </div>
                    
                <div className='main-dashboard-quote-container'>
                    <div className='dashboard-quote-container'><p className='dashboard-quote'>"Almost all creativity involves purposeful play.” – Abraham Maslow</p></div>
                </div>
                
                <div className='dashboard-image-main-container'>
                    <div className='dashboard-text-and-links-container'>
                        <div className='dashboard-links-container'><Link to='/projects' className='dashboard-link'>Projects</Link></div>
                        <p>Discover Projects</p>
                    </div>

                    <div className='dashboard-text-and-links-container' >
                        <div className='dashboard-links-container'><Link to='/create'className='dashboard-link'>Create</Link></div>
                        <p>Create something</p>
                    </div>

                    
                    <div className='dashboard-text-and-links-container'>
                        <div className='dashboard-links-container' id='inventory-link'><Link to='/inventory' className='dashboard-link'>Inventory</Link></div>
                        <p>Keep Track of Inventory</p>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Dashboard);