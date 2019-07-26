import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Create extends Component {
    constructor() {
        super()
        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
        axios.get(`/api/filtered/projects`)
        .then(res => {
            this.setState({
                projects: res.data
            })
        })
        .catch(err => console.log(err))
    }




    render() {
        const {projects} = this.state
        if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        return (
            <div>
                {
                    projects.map(item => {
                        return (
                            <div key={item.id}>
                                <h1>{item.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Create);