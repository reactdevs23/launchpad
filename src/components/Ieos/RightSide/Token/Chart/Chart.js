import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell, Label } from "recharts";

const Chart = () => {
  const COLORS = [
    "#4B73FF",
    "#F8D33A",
    "#11D080",
    "#FF9E2D",
    "#FA4B55",
    "#2A2B2F",
  ];

  const data = [
    { name: "p1", value: 680 },
    { name: "p2", value: 152 },
    { name: "p3", value: 67 },
    { name: "p4", value: 98 },
    { name: "p5", value: 112 },
    { name: "p6", value: 68 },
  ];

  const TEXT_COLORS = ["#FFF", "#000", "#FFF", "#FFFF", "#FFF", "#fff"];
  return (
    <PieChart
      width={250}
      height={250}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={1}
        dataKey="value"
        label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          percent,
          index,
        }) => {
          const RADIAN = Math.PI / 180;
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);
          return (
            <text
              x={x}
              y={y}
              fill={TEXT_COLORS[index % TEXT_COLORS.length]}
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="Outfit"
              fontSize={10}
            >
              {" "}
              {`${(percent * 100).toFixed(1)}%`}
              {/* Display the percentage value */}
            </text>
          );
        }}
      >
        {/* <Label
          content={({ viewBox }) => {
            const { cx, cy } = viewBox;
            return (
              <g>
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={16}
                  fontWeight="bold"
                  fill="#000"
                >
                  125M
                </text>
                <text
                  x={cx}
                  y={cy + 16}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={12}
                  fontFamily="Outfit"
                  fill="#131316
"
                >
                  Total
                </text>
              </g>
            );
          }}
        /> */}
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="custom-tooltip">
                  <p className="label">{`${payload[0].name}: ${payload[0].value}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            strokeWidth={0}
            cornerRadius={10}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;
