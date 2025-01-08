/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useGetAllUser } from "@/src/hooks/singleUse";

interface User {
  id: string;
  name: string;
  email: string;
  mobileNumber: string;
  status: string;
  activity: string;
  time: string;
  profilePhoto: string;
}

const AllUser = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Use the useGetAllUser hook, passing currentPage as a dependency
  const { data, isLoading, isError } = useGetAllUser();
  const totalPages = 1;

  const users: User[] = data?.data || [];
  console.log(data);
  console.log(users);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleDelete = (id: string) => {
    // Implement your delete logic here
    console.log("Delete user with id:", id);
  };

  const handleBlock = (id: string) => {
    // Implement your block logic here
    console.log("Block user with id:", id);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <Avatar size="md" />
        </CardHeader>
        <CardBody>
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error loading users</div>
          ) : (
            <Table aria-label="User activity table" selectionMode="none">
              <TableHeader>
                <TableColumn>User</TableColumn>
                <TableColumn>Email</TableColumn>
                <TableColumn>Mobile</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn>Activity</TableColumn>
                <TableColumn>Time</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {users?.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Avatar src={user.profilePhoto} size="lg" />
                      {user.name}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.mobileNumber}</TableCell>
                    <TableCell>
                      <Badge color="success">{user.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge color="success">{user.activity}</Badge>
                    </TableCell>
                    <TableCell>{user.time}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleDelete(user.id)}>
                        Delete
                      </Button>
                      <Button
                        color="warning"
                        onClick={() => handleBlock(user.id)}
                      >
                        Block
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <Button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            <div>
              Page {currentPage} of {totalPages}
            </div>
            <Button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AllUser;
