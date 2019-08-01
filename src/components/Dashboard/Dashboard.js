import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import './Dashboard.css';
import {connect} from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
    render() {
        // if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        return (
            <div>
                <div className='h'></div>
                <div className='dashboard-blue-background'></div>
                <div className='main-dashboard-image'></div>

                <div className='hi'>Hi there</div>



                <div className='dashboard-text-container'>
                    <p className='dashboard-text'>EVERY child is an artist.</p>
                </div>

                <div className='dashboard-image-main-container'>
                    <div className='dashboard-image-and-links-container'>
                        <img className='dashboard-link-image' src='https://kristinapersonalproject.s3-us-west-1.amazonaws.com/CraftRainbow.JPG'/>
                        <div className='dashboard-links-container'><Link to='/projects' className='dashboard-link'>Projects</Link></div>
                    </div>

                    <div className='dashboard-image-and-links-container' >
                        <img className='dashboard-link-image' src='https://kristinapersonalproject.s3-us-west-1.amazonaws.com/childpainthands.JPG'/>
                        <div className='dashboard-links-container'><Link to='/create'className='dashboard-link'>Create</Link></div>
                    </div>

                    
                    <div className='dashboard-image-and-links-container'>
                        <img className='dashboard-link-image' src='https://kristinapersonalproject.s3-us-west-1.amazonaws.com/crayons2.JPG'/>
                        <div className='dashboard-links-container' id='inventory-link'><Link to='/inventory' className='dashboard-link'>Inventory</Link></div>
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