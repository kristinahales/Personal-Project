import React, {Component} from 'react';
import axios from 'axios';

class Create extends Component {
    constructor() {
        super()
        this.state = {
            projects: [],
            filteredProject: []
        }
        this.filter = this.filter.bind(this);
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

    filter(projectId) {
        axios.get(`/api/projects/filtered/${projectId}`)
    }


    render() {
        return (
            <div>


            </div>
        )
    }
}
export default Create;