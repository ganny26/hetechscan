import React, { Component } from 'react';

import './App.css';
import SearchComponent from '../src/components/SearchComponent';
import PaginationComponent from '../src/components/PaginationComponent';
class App extends Component {
  render() {
    return (
      <div>
        <SearchComponent/>
        <PaginationComponent/>
      </div>
    );
  }
}

export default App;
