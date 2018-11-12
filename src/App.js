import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import MainPage from './components/mainPage.js'
import Search from './components/search.js'
import * as BooksAPI from './BooksAPI.js'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  componentDidUpdate() {
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll()
    .then(resp => {
      this.setState({books: resp})
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          < MainPage books={this.state.books} moveShelf={this.moveShelf}/>
        )}/>

        <Route path='/search' render={() => (
          <Search books={this.state.books} moveShelf={this.moveShelf}/>
        )}/>

      </div>
    )
  }
}

export default BooksApp

