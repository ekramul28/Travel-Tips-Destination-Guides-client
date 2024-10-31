"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaUsers, FaChartLine, FaDollarSign, FaTasks } from "react-icons/fa";
import { Avatar, Badge, Spacer } from "@nextui-org/react";

// Sample data for the chart
const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 600 },
  { name: "Apr", users: 900 },
  { name: "May", users: 1200 },
  { name: "Jun", users: 1600 },
];

const DashboardHome: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="flex flex-wrap justify-between gap-6">
        <div className="flex-1 min-w-[200px]">
          <Card className="shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white transition-all duration-300">
            <CardHeader className="flex items-center">
              <FaUsers size={28} color="white" />
              <Spacer x={0.5} />
              <Avatar size="sm" />
            </CardHeader>
            <CardBody className="text-center">
              <h2 className="text-3xl font-extrabold">1,234</h2>
              <p className="text-sm opacity-80">Active Users</p>
            </CardBody>
          </Card>
        </div>
        <div className="flex-1 min-w-[200px]">
          <Card className="shadow-lg hover:shadow-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white transition-all duration-300">
            <CardHeader className="flex items-center">
              <FaChartLine size={28} color="white" />
              <Spacer x={0.5} />
              <Avatar size="sm" />
            </CardHeader>
            <CardBody className="text-center">
              <h2 className="text-3xl font-extrabold">567</h2>
              <p className="text-sm opacity-80">Sessions</p>
            </CardBody>
          </Card>
        </div>
        <div className="flex-1 min-w-[200px]">
          <Card className="shadow-lg hover:shadow-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white transition-all duration-300">
            <CardHeader className="flex items-center">
              <FaDollarSign size={28} color="white" />
              <Spacer x={0.5} />
              <Avatar size="sm" />
            </CardHeader>
            <CardBody className="text-center">
              <h2 className="text-3xl font-extrabold">$7,890</h2>
              <p className="text-sm opacity-80">Monthly Revenue</p>
            </CardBody>
          </Card>
        </div>
        <div className="flex-1 min-w-[200px]">
          <Card className="shadow-lg hover:shadow-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white transition-all duration-300">
            <CardHeader className="flex items-center">
              <FaTasks size={28} color="white" />
              <Spacer x={0.5} />
              <Avatar size="sm" />
            </CardHeader>
            <CardBody className="text-center">
              <h2 className="text-3xl font-extrabold">42</h2>
              <p className="text-sm opacity-80">Pending Tasks</p>
            </CardBody>
          </Card>
        </div>
      </div>
      {/* Chart Section */}
      <Card>
        <CardHeader>
          <Avatar size="md" />
        </CardHeader>
        <CardBody>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#0072F5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardHome;
