"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const UserDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
        <Button color="primary">Logout</Button>
      </header>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-6 mb-8">
        {/* Card 1 */}
        <Card className="w-full max-w-xs bg-white shadow-md">
          <CardHeader className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Your Post</h3>
          </CardHeader>
          <CardBody className="p-6">
            <h2 className="text-3xl font-bold text-blue-500">02</h2>
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
            <h2 className="text-3xl font-bold text-green-500">3</h2>
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
            <h2 className="text-3xl font-bold text-red-500">12</h2>
          </CardBody>
        </Card>
      </div>

      {/* Quick Actions Section */}
      <Card className="bg-white shadow-md">
        <CardHeader className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-700">Quick Actions</h2>
        </CardHeader>
        <CardBody className="p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button className="w-full" color="primary">
              Manage Post
            </Button>
            <Button className="w-full" color="success">
              View Following
            </Button>
            <Button className="w-full" color="warning">
              View Follower
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserDashboard;
