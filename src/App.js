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

class App extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 30 }}>
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>
            <div className="col-md-8">
              <Main />
            </div>
          </div>
        </div>
        <CaptionComponent />
      </div>
    );
  }
}

export default App;
