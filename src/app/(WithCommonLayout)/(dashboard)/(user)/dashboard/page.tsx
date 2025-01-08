"use client";
import React, { useEffect, useRef } from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const UserDashboard = () => {
  // Refs to store chart instances
  const lineChartRef = useRef<any>(null);
  const pieChartRef = useRef<any>(null);

  // Sample data for the charts
  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Posts Over Time",
        data: [12, 19, 3, 5, 2, 3, 7],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
      },
    ],
  };

  const data2 = {
    labels: ["Follower", "Following", "Post"],
    datasets: [
      {
        label: "User Activity",
        data: [3, 12, 2],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // Initialize charts after DOM has mounted
  useEffect(() => {
    // Check if refs are valid before creating charts
    if (lineChartRef.current && pieChartRef.current) {
      // Clean up and destroy previous chart instances to avoid memory leaks
      if (lineChartRef.current.chart) {
        lineChartRef.current.chart.destroy();
      }
      if (pieChartRef.current.chart) {
        pieChartRef.current.chart.destroy();
      }
    }
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Stats Section */}
      <div className="flex justify-center items-center gap-6 mb-8">
        {/* Card 1 */}
        <Card className="w-full max-w-xs bg-white shadow-md">
          <CardHeader className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Your Post</h3>
          </CardHeader>
          <CardBody className="p-6">
            <h2 className="text-3xl font-bold text-blue-500">06</h2>
          </CardBody>
        </Card>

        {/* Card 2 */}
        <Card className="w-full max-w-xs bg-white shadow-md">
          <CardHeader className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">
              Your Follower
            </h3>
          </CardHeader>
          <CardBody className="p-6">
            <h2 className="text-3xl font-bold text-green-500">2</h2>
          </CardBody>
        </Card>

        {/* Card 3 */}
        <Card className="w-full max-w-xs bg-white shadow-md">
          <CardHeader className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">
              You Following
            </h3>
          </CardHeader>
          <CardBody className="p-6">
            <h2 className="text-3xl font-bold text-red-500">2</h2>
          </CardBody>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="flex justify-center items-center gap-6 mb-8">
        {/* Pie Chart */}
        <Card className="w-full max-w-xl bg-white shadow-md">
          <CardHeader className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">
              User Activity
            </h3>
          </CardHeader>
          <CardBody className="p-6">
            <Pie
              ref={pieChartRef}
              data={data2}
              // options={options}
              redraw={true} // Ensure chart redraws properly
            />
          </CardBody>
        </Card>
        {/* Line Chart */}
        <Card className="w-full max-w-xl bg-white shadow-md">
          <CardHeader className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">
              Posts Over Time
            </h3>
          </CardHeader>
          <CardBody className="p-6">
            <Line
              ref={lineChartRef}
              data={data1}
              // options={options}
              redraw={true} // Ensure chart redraws properly
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
