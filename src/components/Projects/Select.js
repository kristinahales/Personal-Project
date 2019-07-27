import React, {Component} from 'react';

class Select extends Component {
    constructor() {
        super()
    }

    render() {
        const {inventory, handleChange}= this.props
    return (
        <div>
            <select name='inventory_id' onChange={handleChange}>
            {
                inventory.map(item => {
                    return (
                        <option name='inventory_id' value={item.id}>{item.name}</option>
                    )
                })
            }
            </select>
                <input name='quantity' onChange={handleChange}/> 
        </div>
        )
    }
}


export default Select;