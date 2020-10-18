import React, { Component } from 'react';
import * as d3 from "d3";

class BarChart extends Component {
    componentDidMount = () => {
        this.drawChart();
    }

    drawChart = () => {
        const {data, width, height, color, id} = this.props;
        const barspace = width / data.length;
        const barWidth =  barspace * 0.9;
        const padding = 20;

        const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data)])
                     .range([height - padding, padding]);

        const yScaleLength = d3.scaleLinear()
                     .domain([0, d3.max(data)])
                     .range([padding, height - padding]);

        console.log(data)
        console.log(data.map(d => yScale(d)))
        console.log(data.map(d => yScaleLength(d)))

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
            .attr("y", (d, i) => yScale(d))
            .attr("width", barWidth)
            .attr("height", (d, i) => yScaleLength(d))
            .attr("fill", color);

        // svg.selectAll("text")
        //     .data(data)
        //     .enter()
        //     .append("text")
        //     .text((d) => d)
        //     .attr("x", (d, i) => (i * barspace) + 5)
        //     .attr("y", (d) => yScale(d[1]))
    }

    render = () => { 
        return (
            <div id={this.props.id}></div>
        );
    }
}
 
export default BarChart;