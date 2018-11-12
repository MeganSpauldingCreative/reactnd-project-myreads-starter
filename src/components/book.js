import React from 'react'
import Selector from './selector.js'

class Book extends React.Component {

  render() {
    return(

        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
				<Selector book={this.props.book} moveShelf={ this.props.moveShelf }/>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>


    )

  }

}


export default Book