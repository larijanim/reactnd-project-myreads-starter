import React, {Component} from 'react';
import BookShelfChanger from "./BookShelfChanger";
import './App.css'

class Books extends Component {
    render() {
        return (
            <div>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193,
                                  backgroundImage: `url(${this.props.book.imageLinks &&
                                  this.props.book.imageLinks.thumbnail})`,
                            }}></div>
                            <BookShelfChanger
                                  cbook={this.props.book}
                                  moveMe={this.props.moveBook}/>

                        </div>
                        <div className="book-title">{this.props.book.title}</div>
                        <div className="book-authors">{this.props.book.authors}</div>
                    </div>
                </li>


            </div>
        );
    }
}

export default Books;
