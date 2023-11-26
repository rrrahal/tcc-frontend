import React, { useState, useRef } from 'react';
import * as d3 from 'd3';
import { ColorLegend } from './color_legend';

export const Map = ({ width, height, data, countries }) => {
  const tooltipRef = useRef();
  const tooltip_comp = useRef();


  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI - 40)
    .center([10, 35]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const colorScale = d3
    .scaleThreshold()
    .domain([0, 50, 100, 250, 500, 750, 1000])
    .range(d3.schemeBlues[7]);

  const mouseover = (event,d) => {
    console.log(d);
    const tooltipDiv = tooltipRef.current;
    console.log(tooltipDiv);
    if (tooltipDiv) {
      d3.select(tooltipDiv).transition().duration(200).style("opacity", 0.9);
      d3.select(tooltipDiv)
        .html(d ? d.country + "<br/>" + d.sustainable + "<br/>" + d.not_sustainable : "No data")
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

  const allSvgPaths = data.features
    .filter((shape) => shape.id !== 'ATA')
    .map((shape) => {
      const regionData = countries.find((region) => region.country === shape.id);

      const color = regionData ? colorScale(regionData?.sustainable) : 'lightgrey';

      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape)}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill={color}
          fillOpacity={1}
          onMouseEnter={(e) => mouseover(e, regionData)}
          onMouseLeave={() => mouseout()}
        />
      );
    });

  return (
    <div>
      <svg width={width} height={height}>
        {allSvgPaths}
      </svg>
      <div class="flex justify-center">
        <ColorLegend
          height={100}
          colorScale={colorScale}
          width={width / 3} />
      </div>
      <div className="tooltip" ref={tooltipRef} />
    </div>
  );
};
