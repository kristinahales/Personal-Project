import React from 'react';
import Modal from 'react-responsive-modal';

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
                <div className='project-main-container'>
                <i id='x' className="far fa-times-circle" onClick={() => this.props.deleteProject(project.id)}></i>
                <img className='projects-image' onClick={() => this.openModal(i)} src={project.image} height='80%' width='80%'/>
                </div>
            );
        });
    }


    renderModal = () => {
        if(this.state.selectedItem !== null) {
            const project = this.props.projects[this.state.selectedItem];
            return (
                <div>
                    <h2 className='modal-text'>{project.name}</h2>
                    <p className='modal-text'>Instructions: {project.instructions}</p>
                    <p className='modal-text'>Supplies:</p>
                    {
                        project.inventory.map(item => {
                            return (
                                <div>
                                    <ul>
                                        <li className='modal-text'>{item.name}: {item.quantity}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
    }


    render() {
        const {open} = this.state
        return (
            <div>
                <h1 className='projects-header'>Art Projects</h1>
                <div>
                    <div className='pc'>{this.renderProjects()}</div>
                    <Modal 
                        open={open} onClose={this.closeModal} center>
                        <div>{this.renderModal()}</div>

                    </Modal>
                </div>
            </div>
        )
    }
}

export default Display;