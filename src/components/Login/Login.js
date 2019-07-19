import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

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
    }

    handleChange(e) {
        console.log(e.target.name)
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
        .catch(err => {
            this.setState({username: '', password: ''})
            alert('Sorry there is an error')
        })
    }

    render() {
        let {username, password} = this.state
        let { user } = this.state;
        if (user.loggedIn) return <Redirect to="/" />;
        return (
            <div>
                <label>Username:</label>
                <input name='username' value={username} onChange={this.handleChange}/>

                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={this.handleChange}/>
                <button onClick={this.login}>Login</button>
            </div>
        )

    }
}

export default Login;