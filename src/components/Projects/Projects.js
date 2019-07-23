import React from 'react';
import './Projects.css'
import axios from 'axios';
import Modal from 'react-modal';
import AddProject from './addProject';

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            projects: [],
            selectedItem: '',
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
        this.addProject = this.addProject.bind(this);
    }

    componentDidMount() {
        Modal.setAppElement('body');
        axios.get(`/api/projects`)
        .then(res => {
            this.setState({
                projects: res.data
            })
        })
        .catch(err => console.log(err))
    }

    addProject(project) {
        console.log('hit add project', project)
        axios.post('/api/addProject', project)
        .then(res => {
            this.setState({
                projects: res.data
            })
        })
        .catch(err => console.log('error has occurred', err))
    }

    deleteProject(projectId) {
        axios.delete(`/api/delete/project/${projectId}`)
        .then(res => {
            this.setState({projects: res.data})
        })
    }

    openModal() {
        this.setState({modalIsOpen: true})
    }

    closeModal() {
        this.setState({modalIsOpen: false})
    }   


    render() {
        const {projects} = this.state

        return (
            <div>
                <h1>Projects</h1>

                {
                    projects.map(project => {
                        return (
                            <div key={project.id}>
                            <img src={project.image} height='200px' width='200px' onClick={this.openModal} alt='Child art and craft'/>

                            <button onClick={() => this.deleteProject(project.id)}>Delete</button>

                            <Modal
                                isOpen={this.state.modalIsOpen}
                                contentLabel='example modal'>

                                <h1>{project.name}</h1> <h1>{project.instructions}</h1>
                                <p>Supplies: </p>
                                <button onClick={this.closeModal}>Close</button>
                            </Modal>
                                
                            </div>
                        )
                    })
                }
                <AddProject addProject={this.addProject} projects={projects}/>
            </div>
        )
    }
}


export default Projects;