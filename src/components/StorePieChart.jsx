import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function StorePieChart() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-col gap-4 align-center  mb-9">
        <h3 className="flex justify-center">Best Selling Categories</h3>
        <button className="px-4 py-1 border-2 border-gray-200 rounded-xl ">
          Get All Categories
        </button>

        <div className="w-full h-1 bg-gray-100"></div>
      </div>

      <div className="flex flex-wrap mt-4 gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex   items-center gap-2">
            <span
              style={{ backgroundColor: COLORS[index] }}
              className="w-[20px]  h-[20px]"
            />

            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StorePieChart;
