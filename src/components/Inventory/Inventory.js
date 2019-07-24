import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Inventory extends Component {
    constructor() {
        super() 
        this.state = {
            inventory: [],
            updatedQty: 0,

        }
        this.update = this.update.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get('/api/inventory')
        .then(res => {
            this.setState({
                inventory: res.data
            })
        })
    }

    handleChange(e) {
        this.setState({
            updatedQty: e.target.value
        })
    }

    update(inventoryId) {
        let {updatedQty} = this.state
        axios.put(`/api/inventory/edit/${inventoryId}`, {updatedQty})
        .then(res => {
            console.log((res.data))
            this.setState({
                inventory: res.data,
            })
        })
        this.resetInput();
    }
    
    resetInput = () => {
        this.setState({
            updatedQty: 0
        })
    }

    render() {
        if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        const {inventory} = this.state
        return (
            <div>Inventory
                {
                    inventory.map(item => {
                        return (
                            <div key={item.id}>
                            <h1>{item.name}</h1>
                            <img src={item.image} alt='Craft supply'/>
                            <h1>{item.quantity}</h1>
                            
                            <input placeholder='enter inventory number' onChange={this.handleChange}/>
                            <button onClick={() => this.update(item.id)}>Update</button>
                            </div>
                        )
                    })
                }
                <br />
                <Link to='/orders'>
                <button>Need More Supplies</button>
                </Link>
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



