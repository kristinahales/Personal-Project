import React from 'react';
import './Projects.css'
import axios from 'axios';
import Modal from 'react-responsive-modal';
import AddProject from './addProject';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            projects: [],
            selectedItem: null,
            open: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
        this.addProject = this.addProject.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/projects`)
        .then(res => {
            this.setState({
                projects: res.data
            })
        })
        .catch(err => console.log(err))
    }

    addProject(project) {
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

    openModal(i) {
        this.setState({open: true, selectedItem: i})
    }

    closeModal() {
        this.setState({open: false})
    }   

    renderProjects = () => {
        return this.state.projects.map((project, i) => {
            return (
                <div >
                <img onClick={() => this.openModal(i)} src={project.image} height='100px' width='100px'/>
                <button onClick={() => this.deleteProject(project.id)}>Delete</button>
                </div>
            );
        });
    }

    renderModal = () => {
        if(this.state.selectedItem !== null) {
            const project = this.state.projects[this.state.selectedItem];
            return (
                <div>
                    <h1>{project.name}</h1>
                    <h1>{project.instructions}</h1>
                </div>
            );
        }
    }
    render() {
        if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        const {open} = this.state

        return (
            <div>
                <h1>Projects</h1>
                <div>{this.renderProjects()}</div>
                <Modal 
                    open={open} onClose={this.closeModal} center>
                    <div>{this.renderModal()}</div>

                </Modal>

                <AddProject addProject={this.addProject} projects={this.state.projects}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Projects);