import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import CaptionComponent from '../src/components/CaptionComponent';
import SideBar from '../src/components/SideBar';
import Main from '../src/components/Main';
let digits = [
  "An",
  "inside",
  "look",
  "from",
  "Team",
  "CodePen",
  "on",
  "what",
  "it's",
  "like",
  "running",
  "a",
  "web",
  "business.",
  "Everything",
  "from",
  "server",
  "infrastructure,",
  "to",
  "day-to-day",
  "operations,",
  "to",
  "new",
  "feature",
  "development."
];



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
    this.narate = this.narate.bind(this)

  }


  narate() {
    console.log("updated");
    this.setState({
      value: this.state.value + 1
    })
  }


  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 30 }}>
          <div className="row">
            <div className="col-md-3">
          
              <SideBar />
              <button className="btn btn-success" onClick={this.narate.bind(this)}>Update</button>
            </div>
            <div className="col-md-8">
         
              <Main />
            </div>
          </div>
        </div>
      
        <CaptionComponent narration={this.state.value} />
      
      </div>
    );
  }
}

export default App;
