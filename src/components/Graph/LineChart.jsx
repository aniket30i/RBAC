// Graph.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const employees = [
  { name: "Alice", monthOfJoining: "January" },
  { name: "Bob", monthOfJoining: "February" },
  { name: "Carla", monthOfJoining: "January" },
  { name: "David", monthOfJoining: "March" },
  { name: "Eve", monthOfJoining: "February" },
  { name: "Frank", monthOfJoining: "April" },
  { name: "Grace", monthOfJoining: "May" },
  { name: "Hank", monthOfJoining: "June" },
  { name: "Ivy", monthOfJoining: "January" },
  { name: "Jake", monthOfJoining: "May" },
];

const employeeCounts = employees.reduce((counts, employee) => {
  const month = employee.monthOfJoining;
  counts[month] = (counts[month] || 0) + 1;
  return counts;
}, {});
const Graph = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels: months,
    datasets: [
      {
        label: "Employees Joined",
        data: months.map((month) => employeeCounts[month] || 0),
        fill: true,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
