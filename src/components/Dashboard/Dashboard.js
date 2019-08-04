import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import './DashboardImage.css';
import './Welcome.css';
import './Links.css';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        // if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        return (
            <div className='main-dashboard-container'>
                <div className='main-dashboard-image-container'>
                    <div className='collage'></div>
                </div>
                
                <div className='main-welcome-to-dashboard-container'>
                    <div className='welcome-to-dashboard-container'>
                        <p className='dashboard-welcome-text'>Welcome</p>
                        <p className='dashboard-excited-text'>so excited you stopped by!</p>
                        <br />
                        <p className='dashboard-about-text'>About Mini Masterpieces:</p>
                        <p className='dashboard-information'>Mini masterpieces was designed to help educators of young children have the necessary tools to implement artistic activities in the classroom. Creating art expands a child's ability to interact with the world around them, and provides a new set of skills for self-expression and communication. Not only does art help to develop the right side of the brain, it also cultivates important skills that benefit a child's development.</p>
                        <p id='child1' className="fas fa-child"></p>
                        <p id='child2' className="fas fa-child"></p>
                        <p id='child3' className="fas fa-child"></p>                        
                    </div>
                </div>
                
                <div className='dashboard-main-links-container'>
                    <div className='dashboard-links-container'><Link to='/projects' className='dashboard-link'>Discover Projects</Link></div>
                    <div className='dashboard-links-container' id='inventory-link'><Link to='/inventory' className='dashboard-link'>Track Inventory</Link></div>
                    <div className='dashboard-links-container' id='inventory-link'><Link to='/orders' className='dashboard-link'>Order Supplies</Link></div>
                </div>

                <div className='main-dashboard-quote-container'>
                    <div className='dashboard-quote-container'><p className='dashboard-quote'>"Almost all creativity involves purposeful play.” – Abraham Maslow</p></div>
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