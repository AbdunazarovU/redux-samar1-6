import React from 'react';

function Counter({ counter, inc, dec, random }) {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={inc} class="btn btn-primary">
        increment +
      </button>
      <button onClick={dec} class="btn btn-danger">
        decrement -
      </button>
      <button onClick={random} class="btn btn-info">
        random #
      </button>
    </div>
  );
}
export default Counter;
