import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const booksRead = {
  total: 20,
  fiction: 2,
  nonFiction: 18,
  goal: 50
}
class BookCounter extends Component {
  getPercent = dec => dec * 100 + '%'
  calcGoalProgress = (total, goal) => this.getPercent(total/goal)

  render() {
    const { total, fiction, nonFiction, goal } = this.props
    return (
      <div>
        <h1 style={{color: this.props.color}}>Books!</h1>
        <p>Books Read: {total} ({fiction} fiction, {nonFiction} nonfiction)</p>
        <p>Goal Progress: {this.calcGoalProgress(total, goal)} ({total} of {goal} books)</p>
      </div>
    )
  }
}
ReactDOM.render(
  <BookCounter 
    color="gray"
    total={booksRead.total}
    fiction={booksRead.fiction}
    nonFiction={booksRead.nonFiction}
    goal={booksRead.goal}
    />, 
  document.getElementById('root'));

serviceWorker.unregister();
