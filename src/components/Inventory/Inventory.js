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
            filterString: ''
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

    handleChange = (filter) => {
        this.setState({
            filterString: filter
        })
    }


    updateQuantity(inventoryId, updatedQty) {
        return axios.put(`/api/inventory/edit/${inventoryId}`, {updatedQty})
        .then(res => {
            this.setState({
                inventory: res.data,
            })
        })
        .catch(err => console.log(err, 'caught in error'))
    }

    render() {
        // if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        const {inventory, filterString} = this.state
        return (
            <div className='main-inventory-container'>
                    <div className='inventory-order-container'>
                        <Link to='/orders'>
                                <button className='inventory-button'>Need More Supplies</button>
                        </Link>
                    </div>
                    
                    <div className='search-inventory-container'>
                        <i id='search' className="fas fa-search"> <input className='filter-input' placeholder='Search' onChange={e => this.handleChange(e.target.value)}/></i>       
                    </div>
                
                    {
                        inventory.filter(item => {
                            return item.name.includes(filterString)
                        })
                        .map(inventory => {
                            return (
                                <div key={inventory.id}>
                                <EditInventory inventory={inventory} updateQuantity={this.updateQuantity}/>
                                </div>
                            )
                        })
                    }
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



