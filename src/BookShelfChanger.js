import React, {Component} from 'react';
import './App.css'

class BookShelfChanger extends Component {

    state = {
        value:this.props.cbook.shelf ,
    };
    handleChange = event => {
        this.setState({ value: event.target.value });
       // console.log(this.props);
        this.props.moveShelf(this.props.cbook, event.target.value);
       // console.log(event.target.value);
       //  console.log(this.props.cbook.id);
    };
    render() {
        return (
            <div className="book-shelf-changer">
                <select  value={this.state.value} onChange={this.handleChange}>
                    <option value="move" disabled >Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookShelfChanger;
