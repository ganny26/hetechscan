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
            <section class="notifi">
                <div class="notifi-content">
                    <div>
                        <span>
                            <div class="notifi-inner-content">
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
