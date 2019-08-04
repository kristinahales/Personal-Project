import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import './DashboardImage.css';
import './Welcome.css';

import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        // if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        return (
            <div className='main-dashboard-container'>
                <div className='main-dashboard-image-container'>
                    <div className='collage'></div>
                </div>
                    
                <div className='main-dashboard-quote-container'>
                    <div className='dashboard-quote-container'><p className='dashboard-quote'>"Almost all creativity involves purposeful play.” – Abraham Maslow</p></div>
                </div>
                
                <div className='main-welcome-to-dashboard-container'>
                    <div className='welcome-to-dashboard-container'>
                        <h1 className='dashboard-welcome-text'>Welcome</h1>
                        <p className='dashboard-excited-text'>So excited you stopped by!</p>
                        <h2 className='dashboard-about-text'>About Mini Masterpieces</h2>
                        <p className='dashboard-information'>Mini masterpieces was designed to help educators of young children have the necessary tools to teach artistic activities to their students. Creating art expands a child's ability to interact with the world around them, and provides a new set of skills for self-expression and communication. Not only does art help to develop the right side of the brain, it also cultivates important skills that benefit a child's development.</p>
                        <p id='child' className="fas fa-child"></p>
                        <p id='child' className="fas fa-child"></p>
                        <p id='child' className="fas fa-child"></p>                        
                    </div>

                </div>
                

                    


                {/* <div className='dashboard-image-main-container'>
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