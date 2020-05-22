import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom';
import SearchBooks from "./search_Books";
import ListBooks from "./List_Books";
import * as BooksAPI from  './BooksAPI'


class BooksApp extends React.Component {
  state= {myBooks:[],
     newBooks:[]};


  componentDidMount() {
      BooksAPI.getAll()
          .then(res=> this.setState({
              myBooks: res
          }))
  }

    searchrBooks = query => {
        if (query.length > 0) {
            BooksAPI.search(query).then(books1 => {
                if (books1.error) {
                    this.setState({newBooks: []});
                } else {
                    this.setState({newBooks: books1});
                    const updatedBooks=this.state.newBooks.map(b=>{
                        this.state.myBooks.filter(mB=>{mB.id===b.id?
                        b.shelf=mB.shelf
                        :b.shelf='none'})
                        return b;
                        });
                    this.setState({
                        newBooks: updatedBooks,
                    });

                }

            });
        } else {
            this.setState({newBooks: []});
        }
    };

  updateBook = (bookID, shelf) => {

     // console.log(this.state.newBooks[5]);
      if (
          (( this.state.myBooks.filter(book=>(book.id===bookID))).length!==0)) {
          BooksAPI.update(bookID, shelf).then(books => {
              console.log(books);
          });
          console.log('Move');
          const updatedBooks = this.state.myBooks.map(cb => {
              if (cb.id === bookID) {
                  cb.shelf = shelf;
              }
              return cb;
          });

          this.setState({
             myBooks: updatedBooks,
          });

      }else{
          console.log('New');
          const updatedBooks = this.state.myBooks;
          const addBooks = this.state.newBooks.filter(book=>(book.id===bookID));
                addBooks[0].shelf=shelf;
          console.log(addBooks);
          this.setState({
              //(currentState) => ({
              //  myBooks: currentState.myBooks.concat(addBooks[0])
              myBooks: updatedBooks.concat(addBooks),
              //  myBooks: currentState.myBooks.concat(addBooks)
              //  })
          });


      }
  };



    render(){
        console.log(this.state.myBooks)
     // console.log(this.state.myBooks[0]);
     // console.log(this.state.myBooks[0].title);

    return (
      <div className="app">
          <Route exact path='/' render={() => (
              <ListBooks
                  lsBooks={this.state.myBooks}
                  onUpdate={this.updateBook}
              />
          )}/>
          <Route  path='/search' render={() => (
              <SearchBooks
                  nBooks={this.state.newBooks}
                  onSerBooks={this.searchrBooks}
                  onUpdate={this.updateBook}/>
          )}/>

      </div>
    )
  }
}

export default BooksApp
