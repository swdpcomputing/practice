import React, { Component } from 'react';
import './App.css';
import BarChart from './components/barChart'
import BarChartScaled from './components/barChartScaled'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 400,
    height: 500,
    id: 'a1',
  }

  render = () => {
    return (
      <Container fluid>
        <Row>
          <Col>
            <BarChartScaled data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <BarChart data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
