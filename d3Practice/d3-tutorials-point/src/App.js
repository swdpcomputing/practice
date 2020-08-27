import React, { Component } from 'react';
import './App.css';
import BarChart from './components/barChart'

class App extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 'fcdsd',
  }

  render = () => {
    return (
      <div className="App">
        <BarChart data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id}/>
      </div>
    );
  }
}

export default App;
