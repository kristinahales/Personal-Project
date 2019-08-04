import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import Select from './Select';
import './AddProject.css'
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
                {
                    this.props.showFiltered ? <button className='main-add-art-button' onClick={this.props.clearProjects}>Return</button> :
                    <button className='main-add-art-button' onClick={this.props.filteredProjects}><i id='search-projects' className="fas fa-search"></i>Find</button>
                }

                {
                    this.props.showFavorites ? <button className='main-add-art-button' onClick={this.props.flipShowFavorites}>Return</button> :
                    <button className='main-add-art-button' onClick={this.props.flipShowFavorites}><i id='search-favorites' className="fas fa-heart"></i>Favorites</button>
                }
                
                <button className='main-add-art-button' onClick={this.openModal}><i id='plus-button' className="fas fa-plus"></i>Add</button>
                
                
                <Modal 
                    open={open} onClose={this.closeModal}>
                    <div className='add-new-project-container'>
                
                <p className='add-project-text'>Add Project Below</p> 
                <Select handleAddProjectItem={this.handleAddProjectItem} inventory={inventory}/>
                <ol>
                {
                    this.state.projectItems.map(item => {
                        return (
                            <li key={item.inventory_id}>{item.itemName}: {item.quantity}</li>        
                        )
                    })
                }
                </ol>
                <input className='project-information' placeholder='Name' name='name' value={name} onChange={this.handleChange}/>
                <input className='project-information' placeholder='URL' name='image' value={image} onChange={this.handleChange}/>
                <input className='project-information' placeholder='Instructions' name='instructions' value={instructions} onChange={this.handleChange}/>

                <button onClick={this.addProject}  className='add-finished-project-button'>Add Project</button>
                </div>
                </Modal>
            </div>
        )
    }
}

export default AddProject;