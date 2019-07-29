import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Inventory.css';
import EditInventory from './EditInventory';

class Inventory extends Component {
    constructor() {
        super() 
        this.state = {
            inventory: [],
        }
        this.updateQuantity = this.updateQuantity.bind(this);
    }
    
    componentDidMount() {
        axios.get('/api/inventory')
        .then(res => {
            this.setState({
                inventory: res.data
            })
        })
    }

    updateQuantity(inventoryId, updatedQty) {
        console.log('function being hit')
        return axios.put(`/api/inventory/edit/${inventoryId}`, {updatedQty})
        .then(res => {
            this.setState({
                inventory: res.data,
            })
            console.log(res.data)
        })
        .catch(err => console.log(err, 'caught in error'))
    }

    render() {
        if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        const {inventory} = this.state
        return (

            <div className='main-inventory-container'>
                <div className='inventory-link-container'>
                    <h1>Inventory</h1>
                    <Link to='/orders'>
                        <button>Need More Supplies</button>
                    </Link>
                    {
                        inventory.map(inventory => {
                            return (
                                <EditInventory inventory={inventory} updateQuantity={this.updateQuantity}/>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Inventory);



