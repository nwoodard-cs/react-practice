import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre:"Fantasy", rating: 5},
  { title: "Stand out of our Light", author: "James Williams", genre: "Psychology", rating: 5},
  { title: "Infinite Jest", author: "David Foster Wallace", genre: "Dystopian", rating: 4},
  { title: "Godel Escher Bach", author: "Douglas Hoffstader", genre:"Philosopy", rating: 5},
  { title: "Dune", author: "Frank Herbert", genre:"Dystopian", rating: 4},
]

const Book = ({title, author, genre, rating}) => {
  return (
    <section>
      <h2>{title}</h2>
      <h4>By {author}</h4>
      <p><i>{genre}: {rating}&#9733;</i></p>
    </section>
  )
}

class Library extends Component {
  constructor(props){
    super(props)
    this.state = {
      isReading: true
    }
    this.toggleReadingStatus = this.toggleReadingStatus.bind(this) // This is the dumbest shit I've ever seen.
  }

  toggleReadingStatus() {
    this.setState({
      isReading: !this.state.isReading
    })
  }
  render(){
    console.log(this.props)
    const {books} = this.props
    const {isReading} = this.state
  return (
    <div>
      <h1>Books I Love</h1>
      <div>I am {isReading ? '' : 'not'} reading right now.</div>
      <button onClick={this.toggleReadingStatus}>Swap Reading Status</button>
      {books.map(
        (book, i) => <Book key={i} title={book.title} author={book.author} genre={book.genre} rating={book.rating} />
      )}
    </div>
  )
      }
}

render (
  <Library books={books}/>,
  document.getElementById('root')
);

serviceWorker.unregister();
