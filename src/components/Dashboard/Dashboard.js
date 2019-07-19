import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            // user: {},
            // redirect: false,
            // error: false
        }
    }
    // componentDidMount() {
    //     if(!this.state.user.loggedIn) {
    //         axios.get('/api/user')
    //         .then(user => {
    //             this.setState({user: user.data})
    //         })

    //     }
    // }

    render() {
        // let { user, error, redirect } = this.state;
        // if (error || redirect) return <Redirect to="/login" />;
        // if (!user.loggedIn) return <div>Loading</div>;
        return (
            <div>Dashboard</div>
        )
    }
}

export default Dashboard;