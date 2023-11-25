import React, { useState } from 'react';
import * as d3 from 'd3';
import { ColorLegend } from './color_legend';

export const Map = ({ width, height, data, countries }) => {
  const [interactionData, setInteractiondata] = useState(null);


  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI - 40)
    .center([10, 35]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const colorScale = d3
    .scaleThreshold()
    .domain([0, 50, 100, 250, 500, 750, 1000])
    .range(d3.schemeBlues[7]);

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
          onMouseEnter={() => // Each time the circle is hovered hover...
          setInteractiondata(true)}
          onMouseLeave={() => setInteractiondata(null)}
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
    </div>
  );
};
