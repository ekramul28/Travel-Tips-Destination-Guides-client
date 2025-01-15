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
  const lineChartRef = useRef<any>(null);
  const pieChartRef = useRef<any>(null);

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

  useEffect(() => {
    if (lineChartRef.current && pieChartRef.current) {
      if (lineChartRef.current.chart) {
        lineChartRef.current.chart.destroy();
      }
      if (pieChartRef.current.chart) {
        pieChartRef.current.chart.destroy();
      }
    }
  }, []);

  return (
    <div className="p-4 lg:p-6 min-h-screen bg-gray-50">
      {/* Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="w-full bg-white shadow-md">
          <CardHeader className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Your Post</h3>
          </CardHeader>
          <CardBody className="p-6">
            <h2 className="text-3xl font-bold text-blue-500">06</h2>
          </CardBody>
        </Card>

        <Card className="w-full bg-white shadow-md">
          <CardHeader className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">
              Your Follower
            </h3>
          </CardHeader>
          <CardBody className="p-6">
            <h2 className="text-3xl font-bold text-green-500">2</h2>
          </CardBody>
        </Card>

        <Card className="w-full bg-white shadow-md">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="w-full bg-white shadow-md">
          <CardHeader className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">
              User Activity
            </h3>
          </CardHeader>
          <CardBody className="p-6">
            <Pie ref={pieChartRef} data={data2} redraw={true} />
          </CardBody>
        </Card>

        <Card className="w-full bg-white shadow-md">
          <CardHeader className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">
              Posts Over Time
            </h3>
          </CardHeader>
          <CardBody className="p-6">
            <Line ref={lineChartRef} data={data1} redraw={true} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
