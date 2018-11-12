import React from 'react'
import Shelf from './shelf.js'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf moveShelf={ this.props.moveShelf } name="Currently Reading" books={this.props.books.filter(b => b.shelf === "currentlyReading")}/>
            <Shelf moveShelf={ this.props.moveShelf } name="Want to Read" books={this.props.books.filter(b => b.shelf === "wantToRead")}/>
            <Shelf moveShelf={ this.props.moveShelf } name="Read" books={this.props.books.filter(b => b.shelf === "read")}/>
          </div>
        </div>
        <div className="open-search">
          <Link 
          to="/search">Add a book</Link>
        </div>
      </div>
    )

  }

}


export default MainPage