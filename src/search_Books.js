import React, {Component} from 'react';
import './App.css'
import { Route, Link } from 'react-router-dom';
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

    clearQuery = () => {
        this.bookQuery('')
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

                          {this.state.query==''?
                                <div>nothing</div>
                                :
                         <ol className="books-grid">
                             {this.props.nBooks.map((bookls) => (
                                 < Books
                                     book= {bookls}
                                     moveBook={this.props.onUpdate}
                                 />
                              ))}
                        </ol>}
                    </div>
                </div>

        );
    }
}

export default SearchBooks;
