"use client";

import { ChevronRight, Filter, MapPin, Plus, Star, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Sample data for top performing grounds
const topGrounds = [
  {
    id: 1,
    name: "Melbourne Cricket Ground",
    image: "/placeholder.svg?height=200&width=300",
    location: "Melbourne",
    admin: "John Admin",
    views: "1.5k Views",
  },
  {
    id: 2,
    name: "Melbourne Cricket Ground",
    image: "/placeholder.svg?height=200&width=300",
    location: "Melbourne",
    admin: "John Admin",
    views: "1.5k Views",
  },
  {
    id: 3,
    name: "Melbourne Cricket Ground",
    image: "/placeholder.svg?height=200&width=300",
    location: "Melbourne",
    admin: "John Admin",
    views: "1.5k Views",
  },
  {
    id: 4,
    name: "Melbourne Cricket Ground",
    image: "/placeholder.svg?height=200&width=300",
    location: "Melbourne",
    admin: "John Admin",
    views: "1.5k Views",
  },
  {
    id: 5,
    name: "Melbourne Cricket Ground",
    image: "/placeholder.svg?height=200&width=300",
    location: "Melbourne",
    admin: "John Admin",
    views: "1.5k Views",
  },
];

// Sample data for all grounds
const allGrounds = [
  {
    id: "1001",
    ownerName: "John Admin",
    groundName: "Melbourne Cricket",
    location: "Melbourne",
    usersVisited: "1566",
    timeSlots: "1250",
    sportType: "Cricket",
    status: "Available",
  },
  {
    id: "1002",
    ownerName: "Jaiden Nixon",
    groundName: "Sunrise Sports Complex",
    location: "Sydney",
    usersVisited: "1433",
    timeSlots: "1100",
    sportType: "Cricket",
    status: "Available",
  },
  {
    id: "1003",
    ownerName: "Ace Foley",
    groundName: "Elite Turf Park",
    location: "Brisbane",
    usersVisited: "1522",
    timeSlots: "1456",
    sportType: "Tennis",
    status: "Available",
  },
  {
    id: "1004",
    ownerName: "Nikolai Schm...",
    groundName: "Victory Stadium",
    location: "Sunrise Bay",
    usersVisited: "1435",
    timeSlots: "1635",
    sportType: "Tennis",
    status: "Available",
  },
  {
    id: "1005",
    ownerName: "Clayton Char...",
    groundName: "Thunderbolt Arena",
    location: "Evergreen Hills",
    usersVisited: "845",
    timeSlots: "1859",
    sportType: "Football",
    status: "Available",
  },
  {
    id: "1006",
    ownerName: "Prince Chen",
    groundName: "Galaxy Sports Club",
    location: "Sunnyville",
    usersVisited: "1440",
    timeSlots: "1640",
    sportType: "Football, Tennis",
    status: "Available",
  },
  {
    id: "1007",
    ownerName: "Reece Duran",
    groundName: "Legends Cricket G...",
    location: "Thunderbrook",
    usersVisited: "1214",
    timeSlots: "1886",
    sportType: "Cricket",
    status: "Available",
  },
  {
    id: "1008",
    ownerName: "Anastasia M...",
    groundName: "Skyline Football Field",
    location: "Lakeview City",
    usersVisited: "217",
    timeSlots: "1212",
    sportType: "Cricket",
    status: "Available",
  },
  {
    id: "1009",
    ownerName: "Melvin Boyle",
    groundName: "Champions Den",
    location: "Skyhaven",
    usersVisited: "412",
    timeSlots: "1888",
    sportType: "Badminton",
    status: "Available",
  },
  {
    id: "1010",
    ownerName: "Kailee Thomas",
    groundName: "Royal Arena",
    location: "Grand Vista",
    usersVisited: "156",
    timeSlots: "2395",
    sportType: "Cricket",
    status: "Available",
  },
];

export function GroundsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(allGrounds.length / itemsPerPage);

  return (
    <div className="space-y-6">
      {/* Top Performing Grounds Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <h2 className="text-lg font-medium">Top Performing Grounds</h2>
          </div>
          <Button variant="link" className="text-blue-500 font-medium">
            See All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex w-max space-x-4 p-1">
            {topGrounds.map((ground) => (
              <div
                key={ground.id}
                className="relative overflow-hidden rounded-lg border bg-white w-[300px]"
              >
                <div className="aspect-[3/2] relative">
                  <Image
                    src={ground.image || "/placeholder.svg"}
                    alt={ground.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium truncate">{ground.name}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{ground.location}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-gray-100" />
                      <span className="text-sm">{ground.admin}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{ground.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* All Grounds Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">All Grounds</h2>
          <Button className="gap-2 bg-blue-500 hover:bg-blue-600">
            <Plus className="h-4 w-4" />
            Add Ground
          </Button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <Select defaultValue="high">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High To Low Rating</SelectItem>
                <SelectItem value="low">Low To High Rating</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="melbourne">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="melbourne">Melbourne</SelectItem>
                <SelectItem value="sydney">Sydney</SelectItem>
                <SelectItem value="brisbane">Brisbane</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 md:max-w-sm">
            <Input type="search" placeholder="Search..." className="w-full" />
          </div>
        </div>

        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Ground Id</TableHead>
                <TableHead>Owner Name</TableHead>
                <TableHead>Ground Name</TableHead>
                <TableHead>Ground Location</TableHead>
                <TableHead>Users Visited</TableHead>
                <TableHead>Time Slots</TableHead>
                <TableHead>Sport Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allGrounds.map((ground) => (
                <TableRow key={ground.id}>
                  <TableCell>{ground.id}</TableCell>
                  <TableCell>{ground.ownerName}</TableCell>
                  <TableCell>{ground.groundName}</TableCell>
                  <TableCell>{ground.location}</TableCell>
                  <TableCell>{ground.usersVisited}</TableCell>
                  <TableCell>{ground.timeSlots}</TableCell>
                  <TableCell>{ground.sportType}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700"
                    >
                      {ground.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MapPin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, allGrounds.length)} of{" "}
            {allGrounds.length} entries
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
