import React, {Component} from 'react';

class Select extends Component {
    constructor() {
        super()
        this.state = {
            inventory_id: '',
            quantity: ''
        }
    }

    handleSelectItem = (inventory_id) => {
        this.setState({
            inventory_id
        })
    }

    handleChange = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }

    render() {
        const { inventory_id, quantity} = this.state;
        const {inventory}= this.props;
    return (
        <div>
            <select name='inventory_id' onChange={(e) =>this.handleSelectItem(e.target.value)}>   
            {
                inventory.map(item => {
                    return (
                        <option value={item.id} >{item.name}</option>
                    )
                })
            }
            </select>
                <input name='quantity' onChange={this.handleChange}/> 
                <button onClick={() => this.props.handleAddProjectItem({inventory_id: inventory_id, quantity: quantity})}>Add</button>
                <p>{inventory_id}</p>
                <p>{quantity}</p>
        </div>
        )
    }
}


export default Select;