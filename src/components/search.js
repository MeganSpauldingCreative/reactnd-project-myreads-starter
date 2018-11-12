import React from 'react'
import { Link } from 'react-router-dom'
import Book from './book.js'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI.js'

class Search extends React.Component {

  state = {
    query: '',
    results: []
  }


  updateQuery = (query) => {
      this.setState({ query: query.trim() })
    if(query) {
      BooksAPI.search(query)
      .then((resp) => this.setState({results: resp}))
    }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { moveShelf } = this.props
    const { query, results } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = results.filter((book) => match.test(book.title || book.authors))
    } else {
      showingBooks = []
    }

    showingBooks.sort(sortBy('name'))

    return(

          <div className="search-books">
            <div className="search-books-bar">
              <Link 
              to="/"
              className="close-search" 
              >
              Close
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={ query } onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

                {showingBooks.map((book, key) => (
                  <Book book={ book } key={ key } moveShelf={ moveShelf }/>
                )
                )}

              </ol>
            </div>
          </div>
    )

  }

}


export default Search