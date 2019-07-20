import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './Login.css';
import Header from './../Header/Header';

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
                    <img className='image' src='https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
                    <div><input className='input1' placeholder='Username' name='username' value={username} onChange={this.handleChange}/></div>
                    <div><input className='input2' type='password' placeholder='Password' name='password' value={password} onChange={this.handleChange}/></div>

                <div>
                    <button className='button' onClick={this.login}>Login</button>
                    <button className='button' onClick={this.register}>Register</button>
                </div>
            </div>
        )
    }
}

export default Login;