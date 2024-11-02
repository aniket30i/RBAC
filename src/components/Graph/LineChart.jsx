import React, { useEffect, useState } from "react";
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
import useFetchEmployees from "../../hooks/useFetchEmployees";

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

const Graph = () => {
  const { employees, loading, error } = useFetchEmployees(
    "http://localhost:3080/employees"
  );

  const employeeCounts = employees.reduce((counts, employee) => {
    const month = employee.monthOfJoining;
    counts[month] = (counts[month] || 0) + 1;
    return counts;
  }, {});

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

  // Dynamic aspect ratio based on window width
  const getAspectRatio = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 1.5; // tablet
    return 2; // desktop
  };

  const [aspectRatio, setAspectRatio] = useState(getAspectRatio());

  useEffect(() => {
    const handleResize = () => setAspectRatio(getAspectRatio());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: aspectRatio,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Employees Growth 2024" },
    },
  };

  return (
    <div className="relative h-full">
      <div className="h-[50vh] sm:h-[60vh] lg:h-[40vh] max-h-[500px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
