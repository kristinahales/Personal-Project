import React from 'react';
import './Projects.css'
import axios from 'axios';

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        axios.get('/api/projects')
        .then(res => {
            this.setState({
                projects: res.data
            })
        })
    }

    render() {
        const {projects} = this.state

        return (
            <div>
                <h1>Projects</h1>
                {
                    projects.map(project => {
                        return (
                            <div>
                                <h1>{project.name}</h1>
                                <h1>{project.instructions}</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default Projects;