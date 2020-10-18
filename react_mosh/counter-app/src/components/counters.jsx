import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render = () => {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props; // Destructured Arguments
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn_sm m-2">
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
