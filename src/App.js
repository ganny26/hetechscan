import React, { Component } from 'react';

import './App.css';
import SearchComponent from '../src/components/SearchComponent';
import PaginationComponent from '../src/components/PaginationComponent';
import CheckboxComponent from '../src/components/CheckboxComponent';
class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchComponent/>
        <PaginationComponent/>
        <CheckboxComponent value="Option 1"/>
        <CheckboxComponent value="Option 2" />
      </div>
    );
  }
}

export default App;
