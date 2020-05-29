import React from 'react';
import BookShelfChanger from "./BookShelfChanger";
import './App.css'

const Books =({book , moveBook})=> (
            <div>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{
                                  backgroundImage: `url(${book.imageLinks &&
                                  book.imageLinks.thumbnail})`,
                            }}></div>
                            <BookShelfChanger
                                  cbook={book}
                                  moveShelf={moveBook}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors ? book.authors : 'Unknown Author'}</div>
                    </div>
                </li>
            </div>
        );


export default Books;
