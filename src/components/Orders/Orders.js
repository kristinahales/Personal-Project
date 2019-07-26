import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Orders.css'

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
            <div>
                <form className='main-orders-container'> 
                    <div className='orders-header'>Order More Supplies</div>
                    <div className='orders-text1'>Name:<br/><input className='orders-input' name='name' value={name} onChange={this.handleChange}/></div>
                    <div className='orders-text'>Classroom:<br/><input className='orders-input' name='classroom' value={classroom} onChange={this.handleChange}/></div>
                    <div className='orders-text'>Email:<br/><input className='orders-input' name='email' value={email} onChange={this.handleChange}/></div>
                    <div className='orders-text'>Supplies:<br/><textarea className='orders-input' name='textValue' value={textValue} rows='5' cols='30' onChange={this.handleChange}/></div>
                    <div className='orders-text'>Comments:<br/><textarea className='orders-input' rows='10' cols='30' name='message' value={message} onChange={this.handleChange}/></div>
                    <div className='orders-text'><button className='orders-button' onClick={this.handleSubmit}>Submit</button></div>
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



