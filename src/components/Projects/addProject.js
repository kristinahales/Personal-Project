import React, {Component} from 'react';

class AddProject extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            instructions: ''
        }
        this.add = this.add.bind(this);
    }
    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    add() {
        this.props.addProject({
            name: this.state.name,
            image: this.state.image, 
            instructions: this.state.instructions
        })
        this.resetInput();
        
    }

    resetInput() {
        this.setState({
            name: '',
            image: '',
            instructions: ''
        })
    }

    render() {
        let {name, image, instructions} = this.state
        return (
            <div>
                <input placeholder='name' name='name' value={name} onChange={this.handleChange}/>
                <input placeholder='image' name='image' value={image} onChange={this.handleChange}/>
                <input placeholder='instructions' name='instructions' value={instructions} onChange={this.handleChange}/>
                <button onClick={this.add}>Add Project</button>
            </div>
        )
    }
}

export default AddProject;