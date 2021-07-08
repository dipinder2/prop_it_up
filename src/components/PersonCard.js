import React, {Component} from 'react';

class PersonCard extends Component {
    render() {
        return (
            <div>
            	<h1>{this.props.person.name}</h1>
            	<h5>Age: {this.props.person.age}</h5>
            	<h5>Hair Color: {this.props.person.color}</h5>
            </div>
        );
    }
}

export default PersonCard;