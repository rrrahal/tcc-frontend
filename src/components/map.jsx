import React, { useState, useRef } from 'react';
import * as d3 from 'd3';
import { ColorLegend } from './color_legend';
import './ui/title.css';

export const Map = ({ width, height, data, countries }) => {
  const tooltipRef = useRef();
  const tooltip_comp = useRef();


  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI)
    .center([2.34, 48.86]);

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
    <div className='flex flex-col items-center'>
    <div className="text-3xl font-bold py-3 mb-3 title text-teal-800 w-[700px]">Choropleth Map</div>
    <div className="my-2 max-w-[700px]">
      <p className="text-gray-700">
        Explore the Choropleth map below to see the distribution of sustainable and not sustainable companies across different countries. The color intensity represents the count, ranging from 0 to 1000.
        This visualization provides insights into the global landscape of environmentally conscious ventures. You can mouve over any country to see their more data.
      </p>
    </div>
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
