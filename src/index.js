import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const booksRead = {
  total: 20,
  fiction: 2,
  nonFiction: 18,
  goal: 50
}

const getPercent = dec => dec * 100 + '%'
const calcGoalProgress = (total, goal) => getPercent(total/goal)

const BookCounter = ({color, total, fiction, nonFiction, goal}) => {
  return (
    <div>
      <h1 style={{color}}>Books!</h1>
      <p>Books Read: {total} ({fiction} fiction, {nonFiction} nonfiction)</p>
      <p>Goal Progress: {calcGoalProgress(total, goal)} ({total} of {goal} books)</p>
    </div>
  )
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
