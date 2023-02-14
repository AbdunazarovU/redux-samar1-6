import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { inc, dec, random } from './redux/action';

const store = createStore(reducer);
const { dispatch } = store;
const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
};

store.subscribe(update);

document.getElementById('increment').addEventListener('click', () => {
  dispatch(inc());
});
document.getElementById('decrement').addEventListener('click', () => {
  dispatch(dec());
});
document.getElementById('random').addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * 10);
  dispatch(random(randomValue));
});

store.dispatch({ type: 'INCREMENT' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
