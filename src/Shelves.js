import React, {Component} from 'react';
import Books from "./Books";

class Shelves extends Component {
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.shTitle}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.bookSH.map((bookls,i)=>(
                                    <Books key={i}
                                        book={bookls}
                                        moveBook={this.props.moveB}
                                        />
                                )
                            )}

                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shelves;
