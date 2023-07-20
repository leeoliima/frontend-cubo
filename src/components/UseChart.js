import React from 'react';
import { Pie } from 'react-chartjs-2';

const UseChart = ({ data }) => {
  const chartData = {
    labels: data.map((user) => `${user.firstName} ${user.lastName}`),
    datasets: [
      {
        data: data.map((user) => user.participation),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Pode adicionar mais cores se houver mais dados
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default UseChart;
