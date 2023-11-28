import { useMemo, useRef } from "react";
import * as d3 from "d3";
import "./tooltip.css";

const MARGIN = 50;
const BAR_PADDING = 0.2;



export const CircularBarplot = ({
  width,
  height,
  data,
}) => {
  const innerRadius = 120;
  const outerRadius = Math.min(width, height) / 2 - MARGIN;
  const tooltipRef = useRef();

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

  const groups = data.sort((a, b) => b.value - a.value).map((d) => d.name);
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, 2 * Math.PI])
      .padding(BAR_PADDING);
  }, [data, height, width]);

  const yScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.value));
    return d3
      .scaleRadial()
      .domain([-100, max || 10])
      .range([innerRadius, outerRadius]);
  }, [data, width, height]);

  // Build the shapes
  const arcPathGenerator = d3.arc();
  const allShapes = data.map((group, i) => {
    const path = arcPathGenerator({
      innerRadius: innerRadius,
      outerRadius: yScale(group.value),
      startAngle: xScale(group.name),
      endAngle: xScale(group.name) + xScale.bandwidth(),
    });

    const barAngle = xScale(group.name) + xScale.bandwidth() / 2; // (in Radian)
    const turnLabelUpsideDown = (barAngle + Math.PI) % (2 * Math.PI) < Math.PI;
    const labelRotation = (barAngle * 180) / Math.PI - 90; // (convert radian to degree)
    const labelXTranslation = yScale(group.value) + 10;
    const labelTransform =
      "rotate(" +
      labelRotation +
      ")" +
      ",translate(" +
      labelXTranslation +
      ",0)";

    return (
      <g key={i} onMouseEnter={(e) => mouseover(e, group)} onMouseLeave={mouseout}>
        <path
          d={path}
          opacity={0.7}
          stroke="#134e4a"
          fill="#14B8A6"
          fillOpacity={0.3}
          strokeWidth={1}
          rx={1}
        />
        <g transform={labelTransform}>
          <text
            textAnchor={turnLabelUpsideDown ? "end" : "start"}
            alignmentBaseline="middle"
            fontSize={16}
            transform={turnLabelUpsideDown ? "rotate(180)" : "rotate(0)"}
          >
            {`${group.name}`}
          </text>
        </g>
      </g>
    );
  });

  return (
    <div>
      <div className="text-3xl font-bold my-3 title text-teal-800">Circular Barplot</div>
      <div className="my-2 max-w-[700px]">
        <p className="text-gray-700">
        Explore the circular barplot below to visualize the distribution of green ventures based on their sectors. Each sector is represented by a bar, and the length indicates the number of sustainable companies in that category.
        This analysis offers a comprehensive overview of the sectors contributing most to sustainable practices, helping users identify key areas of focus and investment in the green business landscape.
        </p>
      </div>
      <svg width={width} height={height}>
        <g transform={"translate(" + width / 2 + "," + height / 2 + ")"}>
          {allShapes}
        </g>
      </svg>
      <div className="tooltip" ref={tooltipRef} />
    </div>
  );
};
