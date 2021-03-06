import React from 'react'
import Book from './book.js'

class Shelf extends React.Component {


  render() {

    return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{ this.props.name }</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {

                        this.props.books.map((book, key) => (<Book book={book} key={key} moveShelf={ this.props.moveShelf } />))

                      }

                    </ol>
                  </div>
                </div>
    )

  }

}


export default Shelf