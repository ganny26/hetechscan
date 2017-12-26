import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import SearchComponent from '../src/components/SearchComponent';
import PaginationComponent from '../src/components/PaginationComponent';
import CheckboxComponent from '../src/components/CheckboxComponent';
import Checkbox from '../src/components/CheckBox';


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
            </div>
            <div className="col-md-8">
              <Route exact path="/" component={SearchComponent} />
              <Route path="/page" component={PaginationComponent} />
              <Route path="/checkbox" component={Checkbox} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
