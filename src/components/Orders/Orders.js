import React, {Component} from 'react';

class Orders extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            classroom: '',
            email: '',
            message: ''

        }
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>Orders

                <div><input placeholder='Name'/></div>
                <div><input placeholder='Classroom'/></div>
                <div><input placeholder='Email'/></div>
                <div><textarea rows='20' cols='30' placeholder='Message'/></div>
            </div>
        )
    }
}
export default Orders;