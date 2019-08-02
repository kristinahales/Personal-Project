import React, {Component} from 'react';

class Select extends Component {
    constructor() {
        super()
        this.state = {
            inventory_id: '',
            quantity: '',
            itemName: ''
        }
    }

    handleSelectItem = (inventory_id) => {
        this.setState({
            inventory_id,
            itemName: this.findItemName(inventory_id)
        })
    }

    findItemName = (inventory_id) => {
        return this.props.inventory.find(item => item.id === +inventory_id).name
    }

    handleChange = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }

    render() {
        const { inventory_id, quantity, itemName} = this.state;
        const {inventory}= this.props;
    return (
        <div>
            <select name='inventory_id' onChange={(e) =>this.handleSelectItem(e.target.value)}>   
            {
                inventory.map(item => {
                    return (
                        <option value={item.id}>{item.name}</option>
                    )
                })
            }
            </select>
                <input name='quantity' onChange={this.handleChange}/> 
                <button onClick={() => this.props.handleAddProjectItem({inventory_id, quantity, itemName})}>Add</button>

        </div>
        )
    }
}


export default Select;