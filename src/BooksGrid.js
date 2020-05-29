import React, {Component} from 'react';
import Books from "./Books";

class BooksGrid extends Component {
    render() {
        return (
            <div>
                <ol className="books-grid">
                    {this.props.book.map((bookls,i)=>(
                            <Books key={i}
                                   book={bookls}
                                   moveBook={this.props.moveBook}
                            />
                        )
                    )}

                </ol>
            </div>
        );
    }
}

export default BooksGrid;
