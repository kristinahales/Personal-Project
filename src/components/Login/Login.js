import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            user: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateUser(user) {
        this.setState({
            user
        })
    }

    login() {
        const {username, password} = this.state
        axios.post('/api/login', {username, password})
        .then(user => {
            this.setState({username: '', password: ''})
            this.updateUser(user.data);
        })
        .catch(() => {
            this.setState({username: '', password: ''})
            alert('Sorry username or password is incorrect. Please try again.')
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

    render() {
        let {username, password} = this.state
        let { user } = this.state;
        if (user.loggedIn) return <Redirect to="/" />;
        return (
            <div className='main-container'>
                <div className='input-container'>
                    {/* <label>Username:</label> */}
                    <div><input placeholder='Username' name='username' value={username} onChange={this.handleChange}/></div>
                    
                    {/* <label>Password:</label> */}
                    <div><input type='password' placeholder='Password' name='password' value={password} onChange={this.handleChange}/></div>
                </div>

                <div className='button-container'>
                <button className='button' onClick={this.login}>Login</button>
                <button className='button' onClick={this.register}>Register</button>
                </div>

            </div>
        )

    }
}

export default Login;