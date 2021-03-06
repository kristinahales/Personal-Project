import React from 'react';
import axios from 'axios';
import AddProject from './AddProject';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Projects.css';
import Display from './Display';


class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            projects: [],
            filteredProjects: null,
            showFavorites: false,
            showFiltered: false,
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

    addProject(projectItems) {
        axios.post('/api/addProject', projectItems)
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

    
    deleteFavorite = (projectId) => {
        axios.delete(`/api/deleteFavorite/${projectId}`)
        .then(() => {
            const projects = [...this.state.projects];
            const project = projects.find(val => val.id === projectId);
            project.isFavorite = false;
            this.setState({
                projects
            })
        })
    }

    addToFavorites = (projectId) => {
        axios.post(`/api/addFavorite/${projectId}`)
        .then(() => {
            const projects = [...this.state.projects];
            const project = projects.find(val => val.id === projectId);
            project.isFavorite = true;
            this.setState({
                projects
            })
        })
    }

    flipShowFavorites = () => {
        this.setState({
            showFavorites: !this.state.showFavorites
        })
    }

    filteredProjects = () => {
        axios.get(`/api/filtered/projects`)
        .then(res => {
            this.setState({
                filteredProjects: res.data,
                showFiltered: true
            })
        })
        .catch(err => console.log(err))
    }

    clearProjects = () => {
        this.setState({
            showFiltered: false,
            filteredProjects: null
        })
    }


    render() {
        // if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        const {filteredProjects, showFavorites, showFiltered} = this.state
        const projects = this.state.showFavorites ? this.state.projects.filter(val => val.isFavorite) : this.state.projects;
        return (
            <div>
        
                <AddProject addProject={this.addProject} projects={this.state.projects} clearProjects={this.clearProjects} filteredProjects={this.filteredProjects} showFiltered={showFiltered} flipShowFavorites={this.flipShowFavorites} showFavorites={showFavorites}/>
                <Display filteredProjects={filteredProjects} projects={projects} deleteProject={this.deleteProject} addToFavorites={this.addToFavorites} deleteFavorite={this.deleteFavorite}/>
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