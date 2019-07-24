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
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        axios.get(`/api/lowInventory`)
            .then(res => {
                this.setState({ lowInventory: res.data})
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
        const {name, email, classroom, message, textValue} = this.state;
        return (
            <div>Orders
                <form>
                    <div><input placeholder='Name' name='name' value={name} onChange={this.handleInput}/></div>
                    <div><input placeholder='Classroom' name='classroom' value={classroom} onChange={this.handleInput}/></div>
                    <div><input placeholder='Email' name='email' value={email} onChange={this.handleInput}/></div>
                    <textarea rows='10' cols='30' placeholder='Additional Comments' name='message' value={message} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                {
                    this.state.lowInventory.map((item, id) => {
                        return (
                            <div key={id}>
                                <ul>
                                    <li>{item.name}</li>
                                </ul>
                            </div>
                        )
                    })

                }
            </div>
        )
    }
}
export default Orders;

