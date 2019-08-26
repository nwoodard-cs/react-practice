import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre:"Fantasy", rating: "5" },
  { title: "Stand out of our Light", author: "James Williams", genre: "Psychology", rating: "5" },
  { title: "Infinite Jest", author: "David Foster Wallace", genre: "Dystopian", rating: "4" },
  { title: "Godel Escher Bach", author: "Douglas Hoffstader", genre:"Philosopy", rating: "5" },
  { title: "Dune", author: "Frank Herbert", genre:"Dystopian", rating: "4" },
]

const genres = [ 'Dystopian', 'Psychology', 'Philosophy' ] 

const Book = ({ title, author, genre, rating, lendable }) => {
  return (
    <section>
      <h2>{ title }</h2>
      <h4>By { author }</h4>
      <p><i>{ genre }: { rating }&#9733;</i></p>
      <p>I will { lendable ? '' : 'not' } lend this book</p>
    </section>
  )
}

const Recommendations = ({ genres }) => {
  return (
    <h3>I am currently looking for new book recommendations in these genres:&nbsp;
      { genres.join(', ') }</h3>
  )
}

const NoRecommendations = () => {
  return (
    <h3>I am not looking for book recommendations at this time.</h3>
  )
}
class Library extends Component {
  state = { 
    isReading: true,
    lendable: false,
    recommendations: true,
    data: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('http://worldclockapi.com/api/json/mst/now')
      .then( data => data.json())
      .then(data => this.setState({ data, loading: false }))
  }

  componentDidUpdate() { console.log('Library updated.') }

  toggleReadingStatus= () => {
    this.setState( prevState => ({
      isReading: !prevState.isReading
    }))
  }
  render() {
    // const { data } = this
    const { books, genres } = this.props
    const { isReading } = this.state
    return (
      <div>
        <h1>Books I Love</h1>
        { this.state.loading ? 
          'loading...': 
          <div> 
            { this.state.data.dayOfTheWeek }&nbsp;
            { this.state.data.currentDateTime }
          </div>}

        { this.state.recommendations ? 
          <Recommendations genres={ genres }/> : <NoRecommendations /> }

        <div>I am {isReading ? '' : 'not'} reading right now.</div>
        <button onClick={ this.toggleReadingStatus }>Swap Reading Status</button>
        {books.map((book, i) => 
          <Book 
            key={ i }  
            title={ book.title } 
            author={ book.author }
            genre={ book.genre } 
            rating={ book.rating }
            lendable={ this.state.lendable } />
        )}
        <AddBookForm />
      </div>
    )
  }
}

class AddBookForm extends Component {
  state = {}

  setAttribute = e => {

  }

  submit = e => {
    console.log(this.state)
    e.preventDefault()
  }
  render () {
    return (
      <div>
        <h3>Add a New Book</h3>
        <form onSubmit={this.submit}>
          <div><label>Book Title: <input onChange={this.setAttribute("title") } type="text" /></label></div>
          <div><label>Book Author: <input onChange={this.setAttribute("author") } type="text" /></label></div>
          <div><label>Book Genre: <input onChange={this.setAttribute("genre") } type="text" /></label></div>
          <div><label>Book Rating (1-5): <input onChange={this.setAttribute("rating") } type="text" /></label></div>
          <div><button>Submit</button></div>
        </form>
      </div>
    )
  }
}

render (
  <Library books={ books } genres={ genres } />,
  document.getElementById('root')
);

serviceWorker.unregister();
