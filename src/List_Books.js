import React, {Component} from 'react';
import './App.css'
import { Route, Link } from 'react-router-dom';
import Shelves from "./Shelves";


const ShelfTitle=[{title: 'read', index: 1},{title: 'currentlyReading',index:2},{title: 'wantToRead', index:3}];

class ListBooks extends Component {
    render() {
       // console.log(this.props);
        return (
            <div className="list-books">

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                     <div>
                         {ShelfTitle.map(shelf=>(
                             <Shelves  shTitle={shelf.title}
                                       shIndex={shelf.index}
                                       bookSH={this.props.lsBooks.filter(book=>(book.shelf===shelf.title))}
                                       moveB={this.props.onUpdate}
                             />))}
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to='/search'>
                       <button >Add a book</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ListBooks;
