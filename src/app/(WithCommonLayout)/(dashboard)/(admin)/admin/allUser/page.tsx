"use client";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";

const AllUser = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Avatar size="md" />
        </CardHeader>
        <CardBody>
          <Table aria-label="Recent activity table" selectionMode="none">
            <TableHeader>
              <TableColumn>User</TableColumn>
              <TableColumn>Activity</TableColumn>
              <TableColumn>Time</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>
                  <Badge color="success">Logged in</Badge>
                </TableCell>
                <TableCell>2 mins ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>
                  <Badge color="warning">Completed Task</Badge>
                </TableCell>
                <TableCell>10 mins ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Alice Brown</TableCell>
                <TableCell>
                  <Badge color="primary">Updated Profile</Badge>
                </TableCell>
                <TableCell>15 mins ago</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AllUser;
