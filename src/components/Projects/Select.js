import React, {Component} from 'react';

class Select extends Component {
    constructor() {
        super()
        // this.state = {
        //     selected: [{
        //         inventoryItem: '',
        //         qty: 0
        //     }]
        // }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // addToArray = () => {
    //     let inventoryCopy = this.state.selected.inventoryItem;
    //     let qtyCopy = this.state.selected.qty;
    //     this.setState({
    //         selected: {
    //             inventoryItem: [inventoryCopy, this.state.inventoryItem],
    //             qty: [qtyCopy, this.state.qty]
    //         }
    //     })
    // }

    render() {
        // const {selected} = this.state
    return (
        <div>
            <select>
                <option >Beads</option>
                <option value=''>Black Paint</option>
                <option value=''>Black Paper</option>
                <option value=''>Blue Paint</option>
                <option value=''>Blue Paper</option>
                <option value=''>Brads</option>
                <option value=''>Brown Paint</option>
                <option value=''>Brown Paper</option>
                <option value=''>Bubbles</option>
                <option value=''>Buttons</option>
                <option value=''>Chalk</option>
                <option value=''>Clothespins</option>
                <option value=''>Colored Craft Tape</option>
                <option value=''>Colored Pencils</option>
                <option value=''>Colored Popsicle Sticks</option>
                <option value=''>Craft Sand</option>
                <option value=''>Crayons</option>
                <option value=''>Dot Paint</option>
                <option value=''>Easter Eggs</option>
                <option value=''>Envelopes</option>
                <option value=''>Feathers</option>
                <option value=''>Foam Shapes</option>
                <option value=''>Food Coloring</option>
                <option value=''>Glitter Sticks</option>
                <option value=''>Glue Bottles</option>
                <option value=''>Glue Sticks</option>
                <option value=''>Googely Eyes</option>
                <option value=''>Green Paint</option>
                <option value=''>Green Paper</option>
                <option value=''>Jewels</option>
                <option value=''>Markers</option>
                <option value=''>Orange Paint</option>
                <option value=''>Orange Paper</option>
                <option value=''>Paintbrushes</option>
                <option value=''>Paper Bag</option>
                <option value=''>Paper Bowls</option>
                <option value=''>Paper Plate</option>
                <option value=''>Pink Paint</option>
                <option value=''>Pink Paper</option>
                <option value=''>Pipe Cleaners</option>
                <option value=''>Plastic Spoons</option>
                <option value=''>Popsicle Sticks</option>
                <option value=''>Purple Paint</option>
                <option value=''>Purple Paper</option>
                <option value=''>Q-Tips</option>
                <option value=''>Red Paint</option>
                <option value=''>Red Paper</option>
                <option value=''>Ribbon</option>
                <option value=''>Rice</option>
                <option value=''>Shaving Cream</option>
                <option value=''>Shells</option>
                <option value=''>Small Pom-Poms</option>
                <option value=''>Straws</option>
                <option value=''>Tape</option>
                <option value=''>Tissue Paper</option>
                <option value=''>Toilet Paper</option>
                <option value=''>Toilet Paper Rolls</option>
                <option value=''>Watercolors</option>
                <option value=''>White Paint</option>
                <option value=''>White Paper</option>
                <option value=''>Yarn</option>
                <option value=''>Yellow Paint</option>
                <option value=''>Yellow Paper</option>
            </select>
                <input placeholder='qty' name='qty'/> 
                <button>Add</button>
        </div>
        )
    }
}


export default Select;