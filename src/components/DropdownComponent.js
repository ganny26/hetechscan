import React, { Component } from 'react';
let ddList = ['Java', 'Node JS', 'Python', 'Shell', 'Bash'];

const DropdownItem = (props) => {
    console.log(props);
    const itemList = props.itemList;
    const listItems = itemList.map((value, index,array) =>
        <li className="dropdown-item" key={index}>
            {value}
        </li>
    );
    return (<ul>{listItems}</ul>);
}

let voices = window.speechSynthesis;
class DropdownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "option": [],
            "name":""
        }

    }
    componentWillMount() {
        this.setState({
            "option":this.props.options,
            "name":this.props.name
        })
    }
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    {this.state.name}
            </button>
            <div className="dropdown-menu" >
               <DropdownItem itemList={this.state.option}/>
               </div>
            </div>
        )
    }
}

export default DropdownComponent;
