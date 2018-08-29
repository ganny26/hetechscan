import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import SearchComponent from '../components/SearchComponent';
import PaginationComponent from '../components/PaginationComponent';
import Checkbox from '../components/CheckBox';
import DropDown from '../components/DropDown';
import PlayerComponent from '../components/PlayerComponent';

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={()=> <SearchComponent/>} />
            <Route path="/page" component={()=> <PaginationComponent/>} />
            <Route path="/checkbox" component={Checkbox} />
            <Route path="/dropdown" component={DropDown} />
            <Route path="/player" component={PlayerComponent} />
        </Switch>
    </div>
)

export default Main
