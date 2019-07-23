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
            textValue: e.target.value
        })
    }

    render() {
        return (
            <div>Orders
                <form>
                    <div><input placeholder='Name' /></div>
                    <div><input placeholder='Classroom' /></div>
                    <div><input placeholder='Email' /></div>
                    <div><textarea rows='20' cols='30' placeholder='Message' value={this.state.textValue} onChange={this.handleChange}/></div>
                </form>
            </div>
        )
    }
}
export default Orders;