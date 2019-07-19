import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
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
            <div className='main-container'>
            </div>
        )
    }
}

export default Dashboard;