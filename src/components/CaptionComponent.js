import React, { Component } from 'react';
import DropdownComponent from '../components/DropdownComponent';
import '../App.css';
class CaptionComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            "narrationText":""
        }
    }

    componentDidMount(){
        this.setState({
            narrationText:this.props.narration
        })
    }

    componentWillReceiveProps(newProps) {
        this.setState({narrationText:newProps.narration});
    }
    render() {
        return (
            <div className="ccLayer">
                <div className="ccText">
                   {this.state.narrationText}
            </div>
            </div>
        )
    }
}

export default CaptionComponent;
