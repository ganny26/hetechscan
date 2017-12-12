import React, { Component } from 'react';


class CheckboxComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ischecked: false
        };
    }

    toggleChange = (e) => {
        this.setState({
            ischecked: !this.state.ischecked,
        });
    }

    render() {
        let value = this.props.value;
        return (
            <div className="form-group">
            <input type = "checkbox"
            checked = { this.state.ischecked }
            value = { value }
            onChange = { this.toggleChange }
            />{value} 
            </div>
        );
    }
}

export default CheckboxComponent;
