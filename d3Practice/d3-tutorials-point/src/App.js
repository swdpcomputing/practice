import React, { Component } from "react";
import "./App.css";
import BarChart from "./components/barChart";
import BarChartScaled from "./components/barChartScaled";

class App extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 400,
    height: 300,
  };

  render = () => {
    return (
      <div class="grid-container">
        <div id='first' class="grid-item">
          <BarChartScaled
            data={this.state.data}
            width={this.state.width}
            height={this.state.height}
            id={'first'}
          />
        </div>
        <div id='second'class="grid-item">
          <h2>First Bar Chart</h2>
          <BarChart
            data={this.state.data}
            width={this.state.width}
            height={this.state.height}
            id={'second'}
          />
        </div>
      </div>
    );
  };
}

export default App;
