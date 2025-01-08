"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";
import { FaUsers, FaChartLine, FaDollarSign, FaTasks } from "react-icons/fa";
import { Avatar, Spacer } from "@nextui-org/react";

// Sample data for the charts
const data = [
  { name: "Jan", users: 400, sessions: 2400, revenue: 4000 },
  { name: "Feb", users: 800, sessions: 3500, revenue: 5400 },
  { name: "Mar", users: 600, sessions: 2500, revenue: 4600 },
  { name: "Apr", users: 900, sessions: 3800, revenue: 6000 },
  { name: "May", users: 1200, sessions: 4200, revenue: 7800 },
  { name: "Jun", users: 1600, sessions: 5200, revenue: 9600 },
];

const DashboardHome: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <Card className="shadow-xl hover:shadow-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition-all duration-300 transform hover:scale-105">
            <CardHeader className="flex items-center">
              <FaUsers color="white" size={32} />
              <Spacer x={1} />
              <Avatar size="sm" />
            </CardHeader>
            <CardBody className="text-center">
              <h2 className="text-4xl font-extrabold">1,234</h2>
              <p className="text-lg opacity-80">Active Users</p>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="shadow-xl hover:shadow-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white transition-all duration-300 transform hover:scale-105">
            <CardHeader className="flex items-center">
              <FaChartLine color="white" size={32} />
              <Spacer x={1} />
              <Avatar size="sm" />
            </CardHeader>
            <CardBody className="text-center">
              <h2 className="text-4xl font-extrabold">567</h2>
              <p className="text-lg opacity-80">Sessions</p>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="shadow-xl hover:shadow-2xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white transition-all duration-300 transform hover:scale-105">
            <CardHeader className="flex items-center">
              <FaDollarSign color="white" size={32} />
              <Spacer x={1} />
              <Avatar size="sm" />
            </CardHeader>
            <CardBody className="text-center">
              <h2 className="text-4xl font-extrabold">$7,890</h2>
              <p className="text-lg opacity-80">Monthly Revenue</p>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="shadow-xl hover:shadow-2xl bg-gradient-to-r from-purple-500 to-indigo-700 text-white transition-all duration-300 transform hover:scale-105">
            <CardHeader className="flex items-center">
              <FaTasks color="white" size={32} />
              <Spacer x={1} />
              <Avatar size="sm" />
            </CardHeader>
            <CardBody className="text-center">
              <h2 className="text-4xl font-extrabold">42</h2>
              <p className="text-lg opacity-80">Pending Tasks</p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <CardHeader>
            <Avatar size="md" />
          </CardHeader>
          <CardBody>
            <ResponsiveContainer height={300} width="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  dataKey="users"
                  stroke="#0072F5"
                  strokeWidth={3}
                  type="monotone"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        {/* Bar Chart */}
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <CardHeader>
            <Avatar size="md" />
          </CardHeader>
          <CardBody>
            <ResponsiveContainer height={300} width="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sessions" fill="#82ca9d" />
                <Bar dataKey="revenue" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        {/* Area Chart */}
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <CardHeader>
            <Avatar size="md" />
          </CardHeader>
          <CardBody>
            <ResponsiveContainer height={300} width="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  dataKey="users"
                  stroke="#0072F5"
                  fill="#0072F5"
                  fillOpacity={0.3}
                />
                <Area
                  dataKey="sessions"
                  stroke="#FF6347"
                  fill="#FF6347"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
