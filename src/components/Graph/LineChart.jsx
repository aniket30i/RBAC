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
import employees from "../../data/employees.json";

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

const employeeCounts = employees.reduce((counts, employee) => {
  const month = employee.monthOfJoining;
  counts[month] = (counts[month] || 0) + 1;
  return counts;
}, {});

console.log("emp C", employeeCounts);

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
        label: "Employees Growth 2024",
        data: months.map((month) => employeeCounts[month] || 0),
        fill: false,
        backgroundColor: "#EA580C",
        borderColor: "#EA580C",
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
