import React, { Component } from 'react';

import '../App.css';
class InstaComponent extends Component {

    constructor(props) {
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
            <section className="notifi">
                <div className="notifi-content">
                    <div>
                        <span>
                            <div className="notifi-inner-content">
                            {this.state.narrationText}
                                </div>
                        </span>
                    </div>
                </div>
            </section>
        )
    }
}

export default InstaComponent;
