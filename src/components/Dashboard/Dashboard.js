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
                    <div className='first-dashboard-image'></div> 
                    
                    <div className='first-small-dashboard-container'>
                        <div className='second-dashboard-image'></div>
                        <div className='first-dashboard-info'></div>
                    </div>

                    <div className='third-dashboard-image'></div>

                    <div className='second-small-dashboard-container'>
                        <div className='fourth-dashboard-info'></div>
                        <div className='sixth-dashboard-image'></div>
                    </div>
                
                </div>

                <div className='second-dashboard-container'>
                    <div className='second-dashboard-info'>Info</div>
                
                    <div className='fourth-dashboard-image'></div>

                    <div className='fifth-dashboard-image'></div>
                    <div className='third-dashboard-info'>Info</div>
                </div>
               



                {/* <div className='dashboard-text-container'>
                    <p className='dashboard-text'>EVERY child is an artist.</p>
                </div> */}

                {/* <div className='dashboard-image-main-container'>
                    <div className='dashboard-image-and-links-container'>
                        <img className='dashboard-link-image' src='https://kristinapersonalproject.s3-us-west-1.amazonaws.com/CraftRainbow.JPG'/>
                        <div className='dashboard-links-container'><Link to='/projects' className='dashboard-link'>Projects</Link></div>
                    </div> */}

                    {/* <div className='dashboard-image-and-links-container' >
                        <img className='dashboard-link-image' src='https://kristinapersonalproject.s3-us-west-1.amazonaws.com/childpainthands.JPG'/>
                        <div className='dashboard-links-container'><Link to='/create'className='dashboard-link'>Create</Link></div>
                    </div>

                    
                    <div className='dashboard-image-and-links-container'>
                        <img className='dashboard-link-image' src='https://kristinapersonalproject.s3-us-west-1.amazonaws.com/crayons2.JPG'/>
                        <div className='dashboard-links-container' id='inventory-link'><Link to='/inventory' className='dashboard-link'>Inventory</Link></div>
                    </div>
                </div> */}

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