import React, { Component } from 'react';
import DropdownComponent from '../components/DropdownComponent';

class DropDown extends Component {



    render() {
        let ddList = ['Java', 'Node JS', 'Python', 'Shell', 'React JS','React Native'];
        return (
            <DropdownComponent options = {ddList} name="Code"/>
        );
    }
}

export default DropDown;
