import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { inc, dec, random } from './redux/action';

const store = createStore(reducer);
const { dispatch, getState, subscribe } = store;
const update = () => {
  document.getElementById('counter').textContent = getState().value;
};

subscribe(update);

const incHandler = () => dispatch(inc());
const decHandler = () => dispatch(dec());
const randomHandler = (num) => dispatch(random(num));

document.getElementById('increment').addEventListener('click', () => {
  incHandler();
});
document.getElementById('decrement').addEventListener('click', () => {
  decHandler();
});
document.getElementById('random').addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * 10);
  randomHandler(randomValue);
});

store.dispatch({ type: 'INCREMENT' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
