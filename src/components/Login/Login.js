import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            user: {}
        }
    }
    render() {
        return (
            <div>
                <input />
                <input />
                <button>Login</button>
            </div>
        )

    }
}

export default Login;