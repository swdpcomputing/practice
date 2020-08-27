import React, { Component } from "react";

class Counter extends Component {
  getValueSpanClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  };

  getSpanElement = () => {
    return (
      <span className={this.getValueSpanClasses()}>{this.formatCount()}</span>
    );
  };

  getIncrementButton = () => {
    return (
      <button
        onClick={() => this.props.onIncrement(this.props.counter)}
        className="btn btn-sm btn-secondary"
      >
        +
      </button>
    );
  };

  getDecrementButton = () => {
    return (
      <button
        onClick={() => this.props.onDecrement(this.props.counter)}
        className={"btn btn-sm btn-secondary m-2"}
        disabled={this.props.counter.value === 0 ? "disabled" : ""}
      >
        -
      </button>
    );
  };

  getDeleteButton = () => {
    return (
      <button
        onClick={() => this.props.onDelete(this.props.counter.id)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    );
  };

  render = () => {
    return (
      <div className="row">
        <div className="col-1">{this.getSpanElement()}</div>
        <div className="col">
          {this.getIncrementButton()}
          {this.getDecrementButton()}
          {this.getDeleteButton()}
        </div>
      </div>
    );
  };
}

export default Counter;
