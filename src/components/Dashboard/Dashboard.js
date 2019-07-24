import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import './Dashboard.css';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        
        return (
            <div className='dashboard-container'>
                <div className='dashboard-button-container'>
                    <div><Link to='/inventory'><button className='dashboard-button'>Update Inventory</button></Link></div>
                    <div><Link to='/projects'><button className='dashboard-button'>View Art Projects</button></Link></div>
                    <div><Link to='/create'><button className='dashboard-button'>Begin Creating</button></Link></div>
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