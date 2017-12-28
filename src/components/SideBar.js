import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
const SideBar = () => (
    <div>
        <p><Link to="/">Search</Link></p>
        <p><Link to="/page">Pagination</Link></p>
        <p><Link to="/checkbox">Checkbox</Link></p>
        <p><Link to="/dropdown">Dropdown</Link></p>
        <p><Link to="/player">Player</Link></p>
    </div>
)


export default SideBar;