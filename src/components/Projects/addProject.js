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
            projectItems: [],
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
        const {name, image, instructions, projectItems} = this.state
        this.props.addProject({
            name,
            image,
            instructions,
            projectItems
        })
        this.resetInput();
        
    }

    resetInput() {
        this.setState({
            name: '',
            image: '',
            instructions: '',
        })
    }

    handleAddProjectItem = (newItem) => {
        this.setState({
            projectItems: [...this.state.projectItems, newItem]
        })
    }

    render() {
        
        let {name, image, instructions, open, inventory} = this.state
        return (
            <div className='main-add-art-button-container'>
                <button className='main-add-art-button' onClick={this.openModal}>Add Project to Collection</button>
                <Modal 
                    open={open} onClose={this.closeModal} center>

                <Select handleAddProjectItem={this.handleAddProjectItem} inventory={inventory} />
                <ul>
                {
                    this.state.projectItems.map(item => {
                        return (
                            <li key={item.inventory_id}>{item.itemName}: {item.quantity}</li>        
                        )
                    })
                }
                </ul>
                <input placeholder='name' name='name' value={name} onChange={this.handleChange}/>
                <input placeholder='image' name='image' value={image} onChange={this.handleChange}/>
                <input placeholder='instructions' name='instructions' value={instructions} onChange={this.handleChange}/>

                <button onClick={this.addProject}>Add Project</button>
                </Modal>
            </div>
        )
    }
}

export default AddProject;