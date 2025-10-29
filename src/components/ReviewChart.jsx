import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const ReviewChart = ({ ratings }) => {
  
  const data = [...ratings].reverse().map((r) => ({
    star: r.name,
    count: r.count,
  }));

  return (
    <div className="w-full h-64 sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
        //   margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
          className="mt-5 mr-1 sm:mr-10 ml-0 mb-1"
        >
          <CartesianGrid strokeDasharray="3 3" className="text-[rgb(233,177,81)]" />
          <XAxis type="number" />     
          <YAxis type="category" dataKey="star" />  
          <Tooltip />
          <Bar dataKey="count" fill="#e9b151" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReviewChart;
