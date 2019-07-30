import React from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';

class Display extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            selectedItem: null,
            open: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(i) {
        this.setState({open: true, selectedItem: i})
    }

    closeModal() {
        this.setState({open: false})
    }       


    renderProjects = () => {
        return this.props.projects.map((project, i) => {
            return (
                <div className='project-main-container' key={project.id}>
                
                <img className='projects-image' onClick={() => this.openModal(i)} src={project.image} alt='Art project idea for children'/>
                </div>
            );
        });
    }


    renderModal = () => {
        if(this.state.selectedItem !== null) {
            const project = this.props.projects[this.state.selectedItem];
            return (
                <div>
                    <h2 className='modal-title'>{project.name}</h2>
                    <p className='modal-text'>Instructions: {project.instructions}</p>
                    <p className='modal-text'>Supplies:</p>
                    {
                        project.inventory.map(item => {
                            return (
                                <div key={item.id}><ul><li className='modal-text'>{item.name}: {item.quantity}</li></ul>
                                </div>
                            )
                        })
                    }
            
                    {
                        !project.isFavorite ? <i className="fas fa-heart" onClick={() => this.props.addToFavorites(project.id)} style={{cursor: 'pointer', color: 'black'}}></i> :
                        <i className="fas fa-heart" onClick={() => this.props.deleteFavorite(project.id)} style={{cursor: 'pointer', color: 'red'}}></i>
                    }
                    
                    <button className='delete-art-project-button' onClick={() => this.props.deleteProject(project.id)}>Delete Project</button>
                </div>
            );
        }
    }


    render() {
        const {open} = this.state
        return (
            <div>
                    <div className='show-projects-container'>{this.renderProjects()}</div>
                    <Modal 
                        open={open} onClose={this.closeModal} center>
                        <div>{this.renderModal()}</div>
                    </Modal>
            </div>
        )
    }
}

export default Display;