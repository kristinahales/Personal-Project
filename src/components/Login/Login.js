import React from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';
import {connect} from 'react-redux';
import {login, register} from '../../redux/userReducer';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);

        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }



    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetInput() {
        this.setState({
            username: '',
            password: ''
        })
    }

    login = () => {
        this.props.login(this.state.username, this.state.password)
        .catch(() => {
            alert('Invalid username or password');
            this.resetInput();
        })
    }

    register() {
        this.props.register(this.state.username, this.state.password)
        .catch(() => {
            alert('Username is already taken.');
            this.resetInput();
        })
    }

    render() {
        let {username, password} = this.state
        let { user } = this.props;
        if (user.loggedIn) return <Redirect to="/" />;
        return (
            <div className='main-container'>
                    
                    <div className='input-container'>
                        <input className='input1' placeholder='Username' name='username' value={username} onChange={this.handleChange}/>
                        <input className='input2' type='password' placeholder='Password' name='password' value={password} onChange={this.handleChange}/>
                    
                    <div className='button-container'>
                        <button className='button' onClick={this.login}>Login</button>
                        <button className='button' onClick={this.register}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user;
}

export default connect(mapStateToProps, {login, register} )(Login);