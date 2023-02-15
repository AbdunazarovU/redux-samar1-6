import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

function Counter({ counter, inc, dec, random }) {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={inc} className="btn btn-primary">
        increment +
      </button>
      <button onClick={dec} className="btn btn-danger">
        decrement -
      </button>
      <button onClick={random} className="btn btn-info">
        random #
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};

export default connect(mapStateToProps, actions)(Counter);
