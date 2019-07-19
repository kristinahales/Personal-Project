import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            user: {}
        }
        this.updateUser = this.updateUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register() {
        const {username, password} = this.state
        axios.post('/api/register', {username, password})
        .then(user => {
            this.setState({ username: '', password: ''})
            this.updateUser(user.data)
        })
        .catch(() => {
            this.setState({ username: '', password: '' })
            alert('Username is already taken!')
        });
    }
    
    updateUser(user) {
        this.setState({
            user
        })
    }

    render() {
        let {username, password} = this.state;
        let { user } = this.state;
        if (user.loggedIn) return <Redirect to="/" />;
        return (
            <div>
            <label>Username:</label>
            <input name='username' value={username} onChange={this.handleChange}/>

            <label>Password:</label>
            <input type='password' name='password' value={password} onChange={this.handleChange}/>
            <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default Register;