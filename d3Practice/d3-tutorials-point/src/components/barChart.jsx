import React, { Component } from 'react';
import * as d3 from "d3";

class BarChart extends Component {
    componentDidMount = () => {
        this.drawChart();
    }

    drawChart = () => {
        const {data, width, height, id} = this.props;
        const barspace = width / data.length;
        const barWidth =  barspace * 0.9;

        const svg = d3.select('#' + id)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("style", "outline: thin solid black;")
            .style("margin-left", 0)
            
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * barspace)
            .attr("y", (d, i) => height - (15 * d))
            .attr("width", barWidth)
            .attr("height", (d, i) => d * 15)
            .attr("fill", "green");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => (i * barspace) + 5)
            .attr("y", (d, i) => height - (15 * d) - 3);
    }

    render = () => { 
        return (
            <div id={this.props.id}></div>
        );
    }
}
 
export default BarChart;