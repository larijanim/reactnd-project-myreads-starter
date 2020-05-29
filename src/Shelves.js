import React, {Component} from 'react';
import BooksGrid from "./BooksGrid";
class Shelves extends Component {
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.shTitle}</h2>
                    <div className="bookshelf-books">
                        <BooksGrid
                                book={this.props.bookSH}
                                 moveBook={this.props.moveB}/>

                    </div>
                </div>
            </div>
        );
    }
}

export default Shelves;
