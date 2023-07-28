import React from "react";
import { Chart, DoughnutController, Tooltip, Legend } from "chart.js";
import "chart.js/auto";
import { StyledChart } from "./styledChart";

Chart.register(DoughnutController, Tooltip, Legend);

const UseChart = ({ data }) => {
  const chartData = {
    labels: data.map((user) => `${user.first_name} ${user.last_name}`),
    datasets: [
      {
        data: data.map((user) => user.participation),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.formattedValue || "";
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return <StyledChart type="doughnut" data={chartData} options={options} />;
};

export default UseChart;
