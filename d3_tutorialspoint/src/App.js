import React, { Component } from "react";
import "./App.css";
import BarChart from "./components/barChart";
import BarChartScaled from "./components/barChartScaled";

class App extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 600,
    height: 300,
  };

  render = () => {
    return (
      <div className="grid-container">
        <div id='first' className="grid-item">
        <h2>Scaled Bar Chart</h2>
          <BarChartScaled className="grid-item"
            data={this.state.data}
            width={this.state.width}
            height={this.state.height}
            color='blue'
            id={'first'}
          />
        </div>
        <div id='second'className="grid-item">
          <h2>First Bar Chart</h2>
          <BarChart
            data={this.state.data}
            width={this.state.width}
            height={this.state.height}
            color='green'
            id={'second'}
          />
        </div>
      </div>
    );
  };
}

export default App;
