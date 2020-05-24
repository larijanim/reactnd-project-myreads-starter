import React, {Component} from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import Books from "./Books";


class SearchBooks extends Component {

    state = {
        query: ''
    }
    bookQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
        this.props.onSerBooks(query);
    }

    render() {

        return (

                <div className="search-books">
                    <div className="search-books-bar">
                        <Link
                            to='/'>
                         <button className="close-search" >Close</button>
                        </Link>
                        <div className="search-books-input-wrapper">

                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={(event) => this.bookQuery(event.target.value)}
                            />

                        </div>
                    </div>
                    <div className="search-books-results">

                          {this.state.query===''?
                                <div>Enter some keyword</div>
                                :
                         <ol className="books-grid">
                             {this.props.nBooks.length!==0?
                                 this.props.nBooks.map((bookls ,i) => (
                                 < Books
                                     key={i}
                                     book= {bookls}
                                     moveBook={this.props.onUpdate}
                                 />
                              )):<div>Try different words!</div>
                             }
                        </ol>}
                    </div>
                </div>

        );
    }
}

export default SearchBooks;
