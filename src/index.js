import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import reducer from './redux/reducer';
import * as actions from './redux/action';

const store = createStore(reducer);
const { dispatch, getState, subscribe } = store;
const update = () => {
  document.getElementById('counter').textContent = getState().value;
};

subscribe(update);

const { inc, dec, random } = bindActionCreators(actions, dispatch);

document.getElementById('increment').addEventListener('click', inc);
document.getElementById('decrement').addEventListener('click', dec);
document.getElementById('random').addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * 10);
  random(randomValue);
});

store.dispatch({ type: 'INCREMENT' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
