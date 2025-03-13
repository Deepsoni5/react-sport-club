"use client";

import { ChevronRight, Filter, MapPin, Plus, Star, Users } from "lucide-react";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    views: "1.5k Views",
    admin: {
      name: "John Admin",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 2,
    name: "Melbourne Cricket Ground",
    image: "/placeholder.svg?height=200&width=300",
    location: "Melbourne",
    views: "1.5k Views",
    admin: {
      name: "John Admin",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 3,
    name: "Melbourne Cricket Ground",
    image: "/placeholder.svg?height=200&width=300",
    location: "Melbourne",
    views: "1.5k Views",
    admin: {
      name: "John Admin",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 4,
    name: "Melbourne Cricket Ground",
    image: "/placeholder.svg?height=200&width=300",
    location: "Melbourne",
    views: "1.5k Views",
    admin: {
      name: "John Admin",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 5,
    name: "Melbourne Cricket Ground",
    image: "/placeholder.svg?height=200&width=300",
    location: "Melbourne",
    views: "1.5k Views",
    admin: {
      name: "John Admin",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
];

// Sample data for all grounds
const allGrounds = [
  {
    id: "1001",
    ownerName: "John Admin",
    groundName: "Melbourne Cricket",
    location: "Melbourne",
    usersVisited: "1500",
    avgPrice: "1200",
    sportType: "Cricket",
    status: "Available",
  },
  {
    id: "1002",
    ownerName: "Jaiden Nixon",
    groundName: "Sunrise Sports Arena",
    location: "Maplewood City",
    usersVisited: "1450",
    avgPrice: "2000",
    sportType: "Cricket",
    status: "Available",
  },
  {
    id: "1003",
    ownerName: "Ace Foley",
    groundName: "Elite Turf Park",
    location: "Rivertown",
    usersVisited: "1322",
    avgPrice: "1566",
    sportType: "Tennis",
    status: "Available",
  },
  {
    id: "1004",
    ownerName: "Nikolai Schm...",
    groundName: "Victory Stadium",
    location: "Sunrise Bay",
    usersVisited: "1435",
    avgPrice: "1435",
    sportType: "Tennis",
    status: "Available",
  },
  {
    id: "1005",
    ownerName: "Clayton Char...",
    groundName: "Thunderbolt Arena",
    location: "Evergreen Hills",
    usersVisited: "545",
    avgPrice: "1599",
    sportType: "Football",
    status: "Available",
  },
  {
    id: "1006",
    ownerName: "Prince Chen",
    groundName: "Galaxy Sports Cricket",
    location: "Summitville",
    usersVisited: "1440",
    avgPrice: "1440",
    sportType: "Football, Tennis",
    status: "Available",
  },
  {
    id: "1007",
    ownerName: "Reece Duran",
    groundName: "Legends Cricket Ground",
    location: "Thunderbrook",
    usersVisited: "1214",
    avgPrice: "1886",
    sportType: "Cricket",
    status: "Available",
  },
  {
    id: "1008",
    ownerName: "Anastasia M...",
    groundName: "Skyline Football Field",
    location: "Lakeshore City",
    usersVisited: "212",
    avgPrice: "1212",
    sportType: "Cricket",
    status: "Available",
  },
  {
    id: "1009",
    ownerName: "Melvin Boyle",
    groundName: "Champion's Den",
    location: "Skyhaven",
    usersVisited: "412",
    avgPrice: "1898",
    sportType: "Badminton",
    status: "Available",
  },
  {
    id: "1010",
    ownerName: "Kailee Thomas",
    groundName: "Royal Arena",
    location: "Grand Vista",
    usersVisited: "146",
    avgPrice: "2995",
    sportType: "Cricket",
    status: "Available",
  },
];

export function GroundsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;

  // Filter grounds based on search term
  const filteredGrounds = useMemo(() => {
    if (!search.trim()) return allGrounds;

    const searchLower = search.toLowerCase();
    return allGrounds.filter(
      (ground) =>
        ground.id.toLowerCase().includes(searchLower) ||
        ground.ownerName.toLowerCase().includes(searchLower) ||
        ground.groundName.toLowerCase().includes(searchLower) ||
        ground.location.toLowerCase().includes(searchLower)
    );
  }, [search]);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredGrounds.length / itemsPerPage);
  const paginatedGrounds = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredGrounds.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredGrounds, currentPage]);

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
                      <Image
                        src={ground.admin.avatar || "/placeholder.svg"}
                        alt={ground.admin.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-sm">{ground.admin.name}</span>
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
          <Button className="gap-2 bg-blue-500 hover:bg-blue-600 h-9">
            <Plus className="h-4 w-4" />
            Add Ground
          </Button>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              Filter
            </Button>
            <Badge variant="secondary" className="rounded-md px-2 py-1">
              High to Low Rating
            </Badge>
            <Badge variant="secondary" className="rounded-md px-2 py-1">
              Location
            </Badge>
            <Badge variant="secondary" className="rounded-md px-2 py-1">
              +2
            </Badge>
          </div>
          <Input
            type="search"
            placeholder="Search..."
            className="h-9 sm:w-[300px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ground Id</TableHead>
                <TableHead>Owner Name</TableHead>
                <TableHead>Ground Name</TableHead>
                <TableHead>Ground Location</TableHead>
                <TableHead>Users Visited</TableHead>
                <TableHead>Avg Price</TableHead>
                <TableHead>Sport Type</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedGrounds.map((ground) => (
                <TableRow key={ground.id}>
                  <TableCell>{ground.id}</TableCell>
                  <TableCell>{ground.ownerName}</TableCell>
                  <TableCell>{ground.groundName}</TableCell>
                  <TableCell>{ground.location}</TableCell>
                  <TableCell>{ground.usersVisited}</TableCell>
                  <TableCell>{ground.avgPrice}</TableCell>
                  <TableCell>{ground.sportType}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700"
                    >
                      {ground.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            ‹
          </Button>
          {(() => {
            // Calculate which page numbers to show
            const pages = [];
            const maxVisiblePages = 10;

            if (totalPages <= maxVisiblePages) {
              // If we have 10 or fewer pages, show all of them
              for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
              }
            } else {
              // If current page is among the first 5, show first 10 pages
              if (currentPage <= 5) {
                for (let i = 1; i <= maxVisiblePages; i++) {
                  pages.push(i);
                }
              }
              // If current page is among the last 5, show last 10 pages
              else if (currentPage > totalPages - 5) {
                for (
                  let i = totalPages - maxVisiblePages + 1;
                  i <= totalPages;
                  i++
                ) {
                  pages.push(i);
                }
              }
              // Otherwise show 5 pages before and 4 after current page
              else {
                for (let i = currentPage - 5; i <= currentPage + 4; i++) {
                  pages.push(i);
                }
              }
            }

            return pages.map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className="h-8 min-w-[32px]"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ));
          })()}
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            ›
          </Button>
          <span className="ml-2 text-sm text-gray-500">/Page</span>
        </div>
      </div>
    </div>
  );
}
