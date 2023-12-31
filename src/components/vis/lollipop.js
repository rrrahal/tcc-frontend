import { useMemo, useRef } from "react";
import * as d3 from "d3";
import "./tooltip.css";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 80 };

export const Lollipop = ({ width, height, data }) => {
  const tooltipRef = useRef();
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;
  data = data.map((d) => ({ name: d.text, value: d.value }));

  // Y axis is for groups since the barplot is horizontal
  const groups = data.sort((a, b) => b.value - a.value).map((d) => d.name);
  const yScale = useMemo(() => {
    return d3.scaleBand().domain(groups).range([0, boundsHeight]);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.value));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([0, boundsWidth]);
  }, [data, width]);

  const mouseover = (event,d) => {
    console.log(d);
    const tooltipDiv = tooltipRef.current;
    console.log(tooltipDiv);
    if (tooltipDiv) {
      d3.select(tooltipDiv).transition().duration(200).style("opacity", 0.9);
      d3.select(tooltipDiv)
        .html(d.value)
        // TODO: some logic when the tooltip could go out from container
        .style("left", event.pageX + "px")
        .style("top", event.pageY - 28 + "px");
    }
  };

  const mouseout = () => {
    const tooltipDiv = tooltipRef.current;
    if (tooltipDiv) {
      d3.select(tooltipDiv).transition().duration(500).style("opacity", 0);
    }
  };

  // Build the shapes
  const allShapes = data.map((d, i) => {
    const y = yScale(d.name) + yScale.bandwidth() / 2;

    return (
      <g key={i}>
        <line
          x1={xScale(0)}
          y1={y}
          y2={y}
          x2={xScale(d.value)}
          opacity={0.7}
          stroke="#14B8A6"
          strokeWidth={3}
          onMouseOver={e => mouseover(e, d)}
          onMouseOut={mouseout}
        />
        <circle
          cy={y}
          cx={xScale(d.value)}
          opacity={0.7}
          stroke="#14B8A6"
          fill="#14B8A6"
          strokeWidth={2}
          r={5}
          onMouseOver={e => mouseover(e, d)}
          onMouseOut={mouseout}
        />
        <text
          x={xScale(0) - 7}
          y={y}
          textAnchor="end"
          alignmentBaseline="central"
          fontSize={12}
        >
          {d.name}
        </text>
      </g>
    );
  });

  const grid = xScale
    .ticks(5)
    .slice(1)
    .map((value, i) => (
      <g key={i}>
        <line
          x1={xScale(value)}
          x2={xScale(value)}
          y1={0}
          y2={boundsHeight}
          stroke="#808080"
          opacity={0.2}
        />
        <text
          x={xScale(value)}
          y={boundsHeight + 10}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={9}
          stroke="#808080"
          opacity={0.8}
        >
          {value}
        </text>
      </g>
    ));

  return (
    <div>
      <div className="text-3xl font-bold my-3 title text-teal-800">Lollipop Graph</div>
      <div className="my-2 max-w-[700px]">
        <p className="text-gray-700">
          Explore the lollipop chart below to visualize the frequency of words in venture descriptions, excluding common stopwords. Each lollipop represents a word, and the length indicates its frequency.
          This analysis provides insights into the key terms used in green ventures, helping users understand the prevalent themes and focus areas in sustainable business descriptions.
        </p>
      </div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {grid}
          {allShapes}
        </g>
      </svg>
      <div className="tooltip" ref={tooltipRef} />
    </div>
  );
};
