import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import SearchComponent from '../src/components/SearchComponent';
import PaginationComponent from '../src/components/PaginationComponent';
import DropdownComponent from '../src/components/DropdownComponent'
import Checkbox from '../src/components/CheckBox';
import DropDown from '../src/components/DropDown';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container" style={{ marginTop: 30 }}>
          <div className="row">
            <div className="col-md-3">
              <p> <Link to="/">Search</Link></p>
              <p><Link to="/page">Pagination</Link></p>
              <p><Link to="/checkbox">Checkbox</Link></p>
              <p><Link to="/dropdown">Dropdown</Link></p>
            </div>
            <div className="col-md-8">
              <Route exact path="/" component={SearchComponent} />
              <Route path="/page" component={PaginationComponent} />
              <Route path="/checkbox" component={Checkbox} />
              <Route path="/dropdown" component={DropDown} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
