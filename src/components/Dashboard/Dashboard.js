import React, {Component} from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            redirect: false,
        }
    }
    componentDidMount() {
            axios.get('/api/user')
            .then(res => {
                this.setState({user: res.data})
        }).catch(() => this.setState({redirect: true}))
}

//with a 401 we cannot access the data with axios request.

    render() {
        let { user, redirect } = this.state;
        if (redirect) return <Redirect to="/login" />;
        if (!user.loggedIn) return <div>Loading</div>;
        return (
            <div className='dashboard-c'>
                <div><Link to='/inventory'><button className='dashboard-button'>Inventory</button></Link></div>
                <div><Link to='/projects'><button className='dashboard-button'>Projects</button></Link></div>
                <div><Link to='/create'><button className='dashboard-button'>Create</button></Link></div>
            </div>
        )
    }
}

export default Dashboard;