import React, { Component } from 'react';
import CheckboxComponent from './CheckboxComponent';

class CheckBox extends Component {

    render() {
        return (
            <div>
                <CheckboxComponent value="Option 1" />
                <CheckboxComponent value="Option 2" />
            </div>
        )
    }
}

export default CheckBox;
