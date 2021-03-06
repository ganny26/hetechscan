import React, { Component } from 'react';

import '../App.css';



class PaginationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPage:1,
          totalPage:3
        }

        this.handleNextPage = this.handleNextPage.bind(this);
       
    }

    handleNextPage(){

    }

   
    componentWillMount() {
        
    }
    render() {

   
        return (
            <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&lt;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&gt;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        );
    }
}

export default PaginationComponent;
