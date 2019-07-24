import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Orders extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            classroom: '',
            email: '',
            message: '',
            lowInventory: [],
            textValue: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        axios.get(`/api/lowInventory`)
            .then(res => {
                const text = res.data.map(item => {
                    return ` ${item.name}`
                }).join('\n')
                this.setState({ lowInventory: res.data, textValue: text})
            })
        }
    
    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const {name, classroom, email, textValue, message} = this.state
    
        this.reset()
        
        await axios.post('/api/form', {
            name, 
            classroom,
            email,
            message,
            textValue
            })
        }
    
    reset() {
        this.setState({
        name: '',
        classroom: '',
        email: '',
        message: ''
        })
    };

    render() {
        if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>

        const {name, email, classroom, message, textValue} = this.state;
        return (
            <div>Orders
                <form>
                    <div><input placeholder='Name' name='name' value={name} onChange={this.handleChange}/></div>
                    <div><input placeholder='Classroom' name='classroom' value={classroom} onChange={this.handleChange}/></div>
                    <div><input placeholder='Email' name='email' value={email} onChange={this.handleChange}/></div>
                    <textarea name='textValue' value={textValue} rows='15' cols='30' onChange={this.handleChange}/>
                    <textarea rows='10' cols='30' placeholder='Additional Comments' name='message' value={message} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Orders);



