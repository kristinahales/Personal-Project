import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import Select from './Select';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddProject extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            instructions: '',
            inventory: [],
            inventory_id: 0,
            quantity: 0,
            open: false
        }
    }

    componentDidMount() {
        axios.get('/api/inventory')
        .then(res => {
            this.setState({
                inventory: res.data
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    
    openModal = () => {
        this.setState({open: true})
    }

    closeModal = () => {
        this.setState({open: false})
    }   

    addProject = () => {
        const {name, image, instructions, inventory_id, quantity} = this.state
        this.props.addProject({
            name,
            image,
            instructions,
            inventory_id,
            quantity
        })
        this.resetInput();
        
    }
    
    resetInput() {
        this.setState({
            name: '',
            image: '',
            instructions: '',
            quantity: 0
        })
    }



    render() {
        
        let {name, image, instructions, open, inventory, quantity} = this.state
        return (
            <div className='main-add-art-button-container'>
                <button className='main-add-art-button' onClick={this.openModal}>Add Project to Collection</button>
                <Modal 
                    open={open} onClose={this.closeModal} center>

                <Select inventory={inventory} quantity={quantity} handleChange={this.handleChange} inventory_id={this.state.inventory_id}/>
                <input placeholder='name' name='name' value={name} onChange={this.handleChange}/>
                <input placeholder='image' name='image' value={image} onChange={this.handleChange}/>
                <input placeholder='instructions' name='instructions' value={instructions} onChange={this.handleChange}/>
                <Link to='/create'>Begin Creating</Link>
                <button onClick={this.addProject}>Add Project</button>
                </Modal>
            </div>
        )
    }
}

export default AddProject;