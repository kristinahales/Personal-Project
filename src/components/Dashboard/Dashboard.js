import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import './Dashboard.css';
import {connect} from 'react-redux';
import {getUser} from './../../redux/userReducer';

class Dashboard extends Component {

    componentDidMount() {
        if (!this.props.user.loggedIn) {
        this.props.getUser();
        }
    }


    render() {
        let { user, error, redirect } = this.props;
        if (error || redirect) return <Redirect to="/login" />;
        if (!user.loggedIn) return <div>Loading</div>;
        
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
    return state.user;
}

export default  connect(mapStateToProps, {getUser})(Dashboard);