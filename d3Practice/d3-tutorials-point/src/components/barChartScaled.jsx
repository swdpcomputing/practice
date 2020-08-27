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
        const padding = 10;

        const xScale = d3.scaleLinear()
                     .domain([0, d3.max(data, (d) => d[0])])
                     .range([padding, width - padding]);

        const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data, (d) => d[1])])
                     .range([height - padding, padding]);

        const svg = d3.select('#' + id)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("margin-left", 0)
            .attr("style", "outline: thin solid black;")
            
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * barspace)
            .attr("y",(d) => yScale(d[1]))
            .attr("width", 10)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "blue");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => (i * barspace) + 5)
            .attr("y", (d) => yScale(d[1]))
    }

    render = () => { 
        return (
            <div id={this.props.id}></div>
        );
    }
}
 
export default BarChart;