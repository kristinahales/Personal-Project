import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import Select from './Select';

class AddProject extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            instructions: '',
            open: false
        }
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
        this.props.addProject({
            name: this.state.name,
            image: this.state.image, 
            instructions: this.state.instructions
        })
        this.resetInput();
        
    }
    
    resetInput() {
        this.setState({
            name: '',
            image: '',
            instructions: ''
        })
    }

    render() {
        let {name, image, instructions, open} = this.state
        return (
            <div className='main-add-art-button-container'>
                <button className='main-add-art-button' onClick={this.openModal}>Add Project to Collection</button>
                <Modal 
                    open={open} onClose={this.closeModal} center>

                <Select projects={this.props.projects}/>
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