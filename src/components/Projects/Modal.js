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
                <img onClick={() => this.openModal(i)} src={project.image} height='100px' width='100px'/>
                <i id='x' className="far fa-times-circle" onClick={() => this.props.deleteProject(project.id)}></i>
                </div>
            );
        });
    }


    renderModal = () => {
        if(this.state.selectedItem !== null) {
            const project = this.props.projects[this.state.selectedItem];
            return (
                <div>
                    <h4>{project.name}</h4>
                    <p>Instructions: {project.instructions}</p>
                    <p>Supplies:</p>
                    {
                        project.inventory.map(item => {
                            return (
                                <div>
                                    <ul>
                                        <li>{item.name}: {item.quantity}</li>
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
            <div className='pc'>
                <h1 className='projects-header'>Art Projects</h1>
                <div>{this.renderProjects()}</div>
                <Modal 
                    open={open} onClose={this.closeModal} center>
                    <div>{this.renderModal()}</div>

                </Modal>
            </div>
        )
    }
}

export default Display;