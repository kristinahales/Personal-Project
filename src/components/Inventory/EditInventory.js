import React, {Component} from 'react';

class EditInventory extends Component {
    constructor() {
        super()
        this.state = {
            updatedQty: '',
            editing: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.update = this.update.bind(this);
    }

    
    flipEdit = () => {
        this.setState({editing: !this.state.editing})
    }

    handleChange(e) {
        this.setState({
            updatedQty: e.target.value
        })
    }

    update(id) {
        this.flipEdit();
        this.props.updateQuantity(id, this.state.updatedQty);
    }
    
    render() {
        const {updatedQty, editing} = this.state
        const {inventory} = this.props
        return (
            <div> 
                <div className='each-inventory-item'>
                    <img src={inventory.image} alt='Art supply'className='inventory-image'/>

                    <div className='inventory-container'>  
                        {editing ? 
                        <input placeholder='enter inventory number' name='updatedQty' value={updatedQty} onChange={this.handleChange}/> :
                        <p className='inventory-name'>{inventory.name}: {inventory.quantity}</p>
                        }

                        {editing ? 
                        <button onClick={() => this.update(inventory.id)}>Save Changes</button> : 
                        <i id='edit-button' onClick={this.flipEdit} className="far fa-edit"></i>
                        }
                    </div>  
                </div>

            </div>
        )
    }
}

export default EditInventory;