import React, {Component} from 'react';
import axios from 'axios';
import Display from './Display';

class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            favorites: [],
            heartClicked: false
        }
        this.addToFavorites = this.addToFavorites.bind(this);
    }


    render() {
        return (
            <div>
                <Display addToFavorites={this.addToFavorites} heartClicked={this.state.heartClicked}/>
            </div>
        )
    }
}

export default Favorites;