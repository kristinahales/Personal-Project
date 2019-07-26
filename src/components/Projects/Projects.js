import React from 'react';
import './Projects.css'
import axios from 'axios';
import AddProject from './addProject';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Projects.css';
import Display from './Modal';

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            projects: [],
        }

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

    render() {
        // if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        return (
            <div>
                <Display projects={this.state.projects} deleteProject={this.deleteProject}/>
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