import React, { Component, Fragment } from "react";
import "./App.css";
import BarChart from "./components/barChart";
import BarChartScaled from "./components/barChartScaled";
import { Container, Row, Col } from "bootstrap-4-react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 500,
    height: 400,
    id: "a1",
  };

  render = () => {
    return (
      // <Container>
      //   <Row>
      //     <Col>1 of 2</Col>
      //     <Col>2 of 2</Col>
      //   </Row>
      //   <Row>
      //     <Col>1 of 3</Col>
      //     <Col>2 of 3</Col>
      //     <Col>3 of 3</Col>
      //   </Row>
      // </Container>

      // <Fragment>
      //   <BarChartScaled
      //     data={this.state.data}
      //     width={this.state.width}
      //     height={this.state.height}
      //     id={this.state.id}
      //   />
      //   <BarChart
      //     data={this.state.data}
      //     width={this.state.width}
      //     height={this.state.height}
      //     id={this.state.id}
      //   />
      // </Fragment>

      <Container fluid className='App'>
        <Row>
          <Col col="col lg-auto">
            <BarChartScaled
              data={this.state.data}
              width={this.state.width}
              height={this.state.height}
              id={this.state.id}
              color="red"
            />
          </Col>
        </Row>

        <Row>
          <Col col="col lg-auto">
            <BarChart
              data={this.state.data}
              width={this.state.width}
              height={this.state.height}
              id={this.state.id}
              color="green"
            />
          </Col>
        </Row>
      </Container>
    );
  };
}

export default App;
