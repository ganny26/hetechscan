import React, { Component } from 'react';
import Service from '../api/Service';
import '../App.css';

const UserItems = (props) => {
    const userList = props.users;
    const listItems = userList.map((q, index) =>
        <li key={index}>
            {q}
        </li>
    );
    return (<ul>{listItems}</ul>);
}



class SearchComponent extends Component {
     GetUsers() {
        Service.getUsers().then((result) => {
            let userList = result;
            this.setState({
                "userData": userList.data.map((e)=>e.email)
            })
        })
    }
    
    constructor(props) {
        super(props);
        this.state = {
            "userData": []
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    filterUsers(item,query){
        return item.filter((q)=>
                q.indexOf(query) > -1
        )
    }

    handleFilter(e) {
        let query = e.target.value;
        console.log('clicked', e.target.value);
        this.setState({
            "userData":this.filterUsers(this.state.userData,query)})

    }

    handleClick() {
        console.log("clicked");
    }

   
    componentDidMount(){
        this.GetUsers()
    }

   
    render() {
        return (
            <div className="container">
                <div className="row content-margin">
                    <div className="col-md-3">
                        <input type="text"
                            className="form-control"
                            id="txtsearch"
                            onChange={this.handleFilter}
                            placeholder="search names here" />

                    </div>
                    <div className="col-md-3">
                        <button
                            onClick={this.handleClick}
                            className="btn btn-primary">Search</button>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-3">
                        <UserItems users={this.state.userData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchComponent;
