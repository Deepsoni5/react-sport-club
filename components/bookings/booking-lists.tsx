"use client";

import type React from "react";

import { Filter } from "lucide-react";
import { useState, useMemo } from "react";

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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Sample data for bookings - adding more to ensure pagination is visible
const allBookings = [
  {
    id: "BK0011",
    customerName: "John Doe",
    groundName: "Melbourne Cricket Ground",
    dateTime: "2025-02-25 10:00 AM",
    status: "Available",
    payment: "Pending",
    amount: "₹1,250",
    type: "today",
  },
  {
    id: "BK0012",
    customerName: "Mark Johnson",
    groundName: "Sunrise Sports Arena",
    dateTime: "2025-02-25 03:00 PM",
    status: "Available",
    payment: "Paid",
    amount: "₹1,500",
    type: "today",
  },
  {
    id: "BK0013",
    customerName: "Jane Smith",
    groundName: "Victory Stadium",
    dateTime: "2025-02-25 08:00 PM",
    status: "Available",
    payment: "Paid",
    amount: "₹1,800",
    type: "today",
  },
  {
    id: "BK0014",
    customerName: "Nikolai Schm...",
    groundName: "Victory Stadium",
    dateTime: "2025-02-25 05:00 PM",
    status: "Available",
    payment: "Pending",
    amount: "₹1,000",
    type: "today",
  },
  {
    id: "BK0015",
    customerName: "Clayton Char...",
    groundName: "Thunderbolt Arena",
    dateTime: "2025-02-25 08:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹2,600",
    type: "today",
  },
  {
    id: "BK0016",
    customerName: "Prince Chen",
    groundName: "Galaxy Sports Complex",
    dateTime: "2025-02-25 08:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹1,400",
    type: "today",
  },
  {
    id: "BK0017",
    customerName: "Reece Duran",
    groundName: "Legends Cricket Ground",
    dateTime: "2025-02-25 03:00 PM",
    status: "Available",
    payment: "Pending",
    amount: "₹1,450",
    type: "today",
  },
  {
    id: "BK0018",
    customerName: "Anastasia M...",
    groundName: "Skyline Football Field",
    dateTime: "2025-02-25 09:00 AM",
    status: "Booked",
    payment: "Pending",
    amount: "₹1,450",
    type: "today",
  },
  {
    id: "BK0019",
    customerName: "Melvin Boyle",
    groundName: "Champions Den",
    dateTime: "2025-02-25 08:00 AM",
    status: "Booked",
    payment: "Pending",
    amount: "₹1,800",
    type: "today",
  },
  {
    id: "BK0020",
    customerName: "Kailee Thomas",
    groundName: "Royal Arena",
    dateTime: "2025-02-25 09:00 PM",
    status: "Booked",
    payment: "Pending",
    amount: "₹1,350",
    type: "today",
  },
  // Additional bookings to ensure pagination
  {
    id: "BK0021",
    customerName: "Sarah Johnson",
    groundName: "Elite Sports Complex",
    dateTime: "2025-02-26 10:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹1,600",
    type: "today",
  },
  {
    id: "BK0022",
    customerName: "Michael Brown",
    groundName: "Central Stadium",
    dateTime: "2025-02-26 02:00 PM",
    status: "Available",
    payment: "Pending",
    amount: "₹1,350",
    type: "today",
  },
  {
    id: "BK0023",
    customerName: "Emily Davis",
    groundName: "Greenfield Arena",
    dateTime: "2025-02-26 05:30 PM",
    status: "Booked",
    payment: "Paid",
    amount: "₹1,750",
    type: "today",
  },
  {
    id: "BK0024",
    customerName: "Robert Wilson",
    groundName: "Sunset Field",
    dateTime: "2025-02-26 07:00 PM",
    status: "Available",
    payment: "Pending",
    amount: "₹1,200",
    type: "today",
  },
  {
    id: "BK0025",
    customerName: "Jennifer Lee",
    groundName: "Mountain View Ground",
    dateTime: "2025-02-27 09:00 AM",
    status: "Booked",
    payment: "Paid",
    amount: "₹1,900",
    type: "today",
  },
  // Add more bookings for other tabs
  {
    id: "BK0026",
    customerName: "David Miller",
    groundName: "Riverside Stadium",
    dateTime: "2025-03-01 11:00 AM",
    status: "Available",
    payment: "Pending",
    amount: "₹1,400",
    type: "all",
  },
  {
    id: "BK0027",
    customerName: "Susan White",
    groundName: "Lakeside Arena",
    dateTime: "2025-03-02 03:30 PM",
    status: "Booked",
    payment: "Paid",
    amount: "₹1,650",
    type: "all",
  },
];

export function BookingsList() {
  const [activeTab, setActiveTab] = useState("today");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  // Filter bookings based on active tab and search query
  const filteredBookings = useMemo(() => {
    return allBookings.filter((booking) => {
      // Filter by tab type
      const typeMatch = activeTab === "all" || booking.type === activeTab;

      // If no search query, just filter by type
      if (!searchQuery.trim()) return typeMatch;

      // Filter by search query
      const query = searchQuery.toLowerCase();
      return (
        typeMatch &&
        (booking.customerName.toLowerCase().includes(query) ||
          booking.groundName.toLowerCase().includes(query) ||
          booking.id.toLowerCase().includes(query))
      );
    });
  }, [activeTab, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const paginatedBookings = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredBookings.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredBookings, currentPage]);

  // Reset to first page when tab or search changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Generate page numbers for pagination
  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show a subset of pages with current page in the middle if possible
      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = startPage + maxVisiblePages - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          defaultValue="today"
          value={activeTab}
          className="w-full"
          onValueChange={handleTabChange}
        >
          <TabsList className="w-full justify-start h-auto p-0 bg-transparent gap-4 md:gap-8 border-b rounded-none overflow-x-auto">
            <TabsTrigger
              value="today"
              className={cn(
                "relative h-9 rounded-none border-b-2 border-transparent pb-3 pt-2 font-semibold whitespace-nowrap",
                "data-[state=active]:border-primary",
                "focus-visible:ring-offset-0 focus-visible:ring-0"
              )}
            >
              Today Bookings
            </TabsTrigger>
            <TabsTrigger
              value="all"
              className={cn(
                "relative h-9 rounded-none border-b-2 border-transparent pb-3 pt-2 font-semibold whitespace-nowrap",
                "data-[state=active]:border-primary",
                "focus-visible:ring-offset-0 focus-visible:ring-0"
              )}
            >
              All Bookings
            </TabsTrigger>
            <TabsTrigger
              value="event"
              className={cn(
                "relative h-9 rounded-none border-b-2 border-transparent pb-3 pt-2 font-semibold whitespace-nowrap",
                "data-[state=active]:border-primary",
                "focus-visible:ring-offset-0 focus-visible:ring-0"
              )}
            >
              Event Bookings
            </TabsTrigger>
            <TabsTrigger
              value="empty"
              className={cn(
                "relative h-9 rounded-none border-b-2 border-transparent pb-3 pt-2 font-semibold whitespace-nowrap",
                "data-[state=active]:border-primary",
                "focus-visible:ring-offset-0 focus-visible:ring-0"
              )}
            >
              Empty Slots
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Button
          variant="outline"
          size="sm"
          className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-500 whitespace-nowrap"
        >
          View Refund complaints
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <Button variant="outline" size="sm" className="h-9">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <div className="flex-1 md:max-w-sm">
          <Input
            type="search"
            placeholder="Search Booking by ID..."
            className="h-9"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="rounded-lg border bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking Id</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Ground Name</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-center">View Ground</TableHead>
                <TableHead className="text-center">Ground Owner</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedBookings.length > 0 ? (
                paginatedBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>{booking.customerName}</TableCell>
                    <TableCell>{booking.groundName}</TableCell>
                    <TableCell>{booking.dateTime}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={cn(
                          "capitalize",
                          booking.status === "Available" &&
                            "bg-green-100 text-green-700",
                          booking.status === "Booked" &&
                            "bg-blue-100 text-blue-700"
                        )}
                      >
                        {booking.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={cn(
                          "capitalize",
                          booking.payment === "Pending" &&
                            "bg-yellow-100 text-yellow-700",
                          booking.payment === "Paid" &&
                            "bg-green-100 text-green-700"
                        )}
                      >
                        {booking.payment}
                      </Badge>
                    </TableCell>
                    <TableCell>{booking.amount}</TableCell>
                    <TableCell className="text-center">
                      <Button
                        variant="link"
                        className="text-blue-500 h-auto p-0"
                      >
                        View
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        variant="link"
                        className="text-blue-500 h-auto p-0"
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} className="h-24 text-center">
                    {searchQuery
                      ? "No matching bookings found"
                      : "No bookings found"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination - Always show this section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-500">
          Showing{" "}
          {filteredBookings.length > 0
            ? (currentPage - 1) * itemsPerPage + 1
            : 0}{" "}
          to {Math.min(currentPage * itemsPerPage, filteredBookings.length)} of{" "}
          {filteredBookings.length} entries
        </div>
        <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {pageNumbers.map((page) => (
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
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
