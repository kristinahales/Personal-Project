import React, { Component } from 'react';
import axios from 'axios';

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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        axios.get(`/api/lowInventory`)
            .then(res => {
                const inventoryString = res.data.reduce((acc, cur, idx, arr) => arr.length === 1 ? acc += cur.name : idx < arr.length - 1 ? acc += `${cur.name}, ` : ` & ${cur.name}`, '')
                this.setState({ lowInventory: res.data, textValue: inventoryString })
            })
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleInput = (e) => {
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
            textValue,
            message
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
        let {name, classroom, email, textValue, message} = this.state
        return (
            <div>Orders
                <form>
                    <div><input placeholder='Name' name='name' value={name} onChange={this.handleInput}/></div>
                    <div><input placeholder='Classroom' name='classroom' value={classroom} onChange={this.handleInput}/></div>
                    <div><input placeholder='Email' name='email' value={email} onChange={this.handleInput}/></div>
                    <div><textarea rows='5' cols='30' name='textValue' value={textValue} onChange={this.handleChange}/></div>
                    <textarea rows='10' cols='30' placeholder='Additional Comments' name='message' value={message} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Orders;