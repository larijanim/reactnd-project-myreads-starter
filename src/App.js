import React from 'react'
import './App.css'
import { Route} from 'react-router-dom';
import SearchBooks from "./search_Books";
import ListBooks from "./List_Books";
import * as BooksAPI from  './BooksAPI';
import { debounce } from 'throttle-debounce';

/** Maryam Larijani
 * @description Represents a book
 * @constructor
 * @param {string} title - The title of the book
 * @param {string} author - The author of the book
 */


class BooksApp extends React.Component {
  state= {
          myBooks:[],
          newBooks:[],
          errors:false
  };


   componentDidMount() {
      BooksAPI.getAll()
          .then(res =>  this.setState({myBooks: res}))
          .catch(err => { console.log(err);
                          this.setState({errors: true})})
   }

    searchrBooks = debounce(300, false, query => {
    //searchrBooks = query => {
        if (query.length > 0) {
            BooksAPI.search(query).then(books1 => {
                if (books1.error) {
                    this.setState({newBooks: []});
                } else {
                  //  this.setState({newBooks: books1});
                        const updatedBooks=books1.map(b=>{
                        const temp=this.state.myBooks.filter(mB=>( mB.id === b.id ));
                        b.shelf=(temp.length!==0)?temp[0].shelf:'none';
                        return b;
                    })
                    this.setState({newBooks: updatedBooks});
                }
            })
        } else {
            this.setState({newBooks: []});
        }
    });

   updateBooks = (book, shelf) => {
          console.log(book);
          BooksAPI.update(book, shelf)
              .then(books => {
          })
              .catch(err => {
                  console.log(err);
                  this.setState({ error: true });
              });
      if ( //move Book
          (( this.state.myBooks.filter(mbook=>(mbook.id===book.id))).length!==0)) {
             const updatedBooks = this.state.myBooks.map(ub => {
              if (ub.id === book.id) {
                  ub.shelf = shelf;
               }
              return ub;
          });
          this.setState({myBooks: updatedBooks});
      }else{  //Add book
         // const updatedBooks = this.state.myBooks;
          const addBooks = this.state.newBooks.filter(nbook=>(nbook.id===book.id));
                addBooks[0].shelf=shelf;
          this.setState({myBooks: this.state.myBooks.concat(addBooks)});
      }
  }



    render(){

        const { myBooks, newBooks, errors } = this.state;
        if (errors) {
            return <div>Unfortunatly Network errors. Please check later.</div>;
        }

    return (
      <div className="app">
          <Route exact path='/' render={() => (
              <ListBooks
                  lsBooks={myBooks}
                  onUpdate={this.updateBooks}
              />
          )}/>
          <Route  path='/search' render={() => (
              <SearchBooks
                  nBooks={newBooks}
                  onSerBooks={this.searchrBooks}
                  onUpdate={this.updateBooks}/>
          )}/>

      </div>
    )
  }
}

export default BooksApp
