"use client";

import type React from "react";

import { Filter } from "lucide-react";
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
import { cn } from "@/lib/utils";

// Sample data for bookings with type property to filter by tab
const allBookings = [
  // All Bookings / Today's Bookings
  {
    id: "BK0011",
    customerName: "John Doe",
    groundName: "Melbourne Cricket Ground",
    groundOwner: "John Admin",
    dateTime: "2025-03-05 10:00 AM",
    status: "Available",
    payment: "Pending",
    amount: "₹1,200",
    type: ["all", "today"],
  },
  {
    id: "BK0022",
    customerName: "Alice Johnson",
    groundName: "Sunrise Sports Arena",
    groundOwner: "Jaiden Nixon",
    dateTime: "2025-03-06 03:00 PM",
    status: "Available",
    payment: "Paid",
    amount: "₹1,600",
    type: ["all", "today"],
  },
  {
    id: "BK0035",
    customerName: "Jane Smith",
    groundName: "Elite Turf Park",
    groundOwner: "Ace Foley",
    dateTime: "2025-03-07 08:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹1,600",
    type: ["all", "today"],
  },
  {
    id: "BK0074",
    customerName: "Nikolai Schm...",
    groundName: "Victory Stadium",
    groundOwner: "Jaiden Nixon",
    dateTime: "2025-03-08 05:00 PM",
    status: "Pending",
    payment: "Pending",
    amount: "₹1,900",
    type: ["all", "today"],
  },
  {
    id: "BK0055",
    customerName: "Clayton Char...",
    groundName: "Thunderbolt Arena",
    groundOwner: "Nikolai Schm...",
    dateTime: "2025-03-09 09:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹2,500",
    type: ["all", "today"],
  },
  {
    id: "BK0065",
    customerName: "Prince Chen",
    groundName: "Galaxy Sports Complex",
    groundOwner: "Jaiden Nixon",
    dateTime: "2025-03-07 08:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹1,600",
    type: ["all", "today"],
  },
  {
    id: "BK0077",
    customerName: "Reece Duran",
    groundName: "Legends Cricket Ground",
    groundOwner: "Jaiden Nixon",
    dateTime: "2025-03-06 03:00 PM",
    status: "Available",
    payment: "Pending",
    amount: "₹1,800",
    type: ["all", "today"],
  },
  {
    id: "BK108",
    customerName: "Anastasia M...",
    groundName: "Skyline Football Field",
    groundOwner: "Melvin Boyle",
    dateTime: "2025-03-09 08:00 AM",
    status: "Pending",
    payment: "Pending",
    amount: "₹1,400",
    type: ["all", "today"],
  },
  {
    id: "BK559",
    customerName: "Melvin Boyle",
    groundName: "Champion's Den",
    groundOwner: "Ace Foley",
    dateTime: "2025-03-07 08:00 AM",
    status: "Pending",
    payment: "Pending",
    amount: "₹1,600",
    type: ["all", "today"],
  },
  {
    id: "BK0010",
    customerName: "Kailee Thomas",
    groundName: "Royal Arena",
    groundOwner: "John Admin",
    dateTime: "2025-03-06 03:00 PM",
    status: "Pending",
    payment: "Pending",
    amount: "₹1,200",
    type: ["all", "today"],
  },

  // Empty Slots
  {
    id: "ES001",
    customerName: "N/A",
    groundName: "Central Stadium",
    groundOwner: "David Wilson",
    dateTime: "2025-03-10 09:00 AM",
    status: "Available",
    payment: "N/A",
    amount: "₹1,500",
    type: ["all", "empty"],
  },
  {
    id: "ES002",
    customerName: "N/A",
    groundName: "Riverside Arena",
    groundOwner: "Sarah Johnson",
    dateTime: "2025-03-10 11:00 AM",
    status: "Available",
    payment: "N/A",
    amount: "₹1,800",
    type: ["all", "empty"],
  },
  {
    id: "ES003",
    customerName: "N/A",
    groundName: "Mountain View Ground",
    groundOwner: "Robert Brown",
    dateTime: "2025-03-10 02:00 PM",
    status: "Available",
    payment: "N/A",
    amount: "₹1,600",
    type: ["all", "empty"],
  },
  {
    id: "ES004",
    customerName: "N/A",
    groundName: "Sunset Field",
    groundOwner: "Emily Davis",
    dateTime: "2025-03-10 04:00 PM",
    status: "Available",
    payment: "N/A",
    amount: "₹1,400",
    type: ["all", "empty"],
  },
  {
    id: "ES005",
    customerName: "N/A",
    groundName: "Lakeside Arena",
    groundOwner: "Michael Wilson",
    dateTime: "2025-03-10 06:00 PM",
    status: "Available",
    payment: "N/A",
    amount: "₹1,700",
    type: ["all", "empty"],
  },

  // Event Bookings
  {
    id: "EV001",
    customerName: "Corporate Sports Ltd",
    groundName: "Grand Stadium",
    groundOwner: "John Admin",
    dateTime: "2025-03-15 09:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹15,000",
    type: ["all", "event"],
  },
  {
    id: "EV002",
    customerName: "City School District",
    groundName: "Olympic Arena",
    groundOwner: "Jaiden Nixon",
    dateTime: "2025-03-16 10:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹12,500",
    type: ["all", "event"],
  },
  {
    id: "EV003",
    customerName: "Tech Conference Inc",
    groundName: "Central Exhibition Ground",
    groundOwner: "Ace Foley",
    dateTime: "2025-03-17 08:00 AM",
    status: "Pending",
    payment: "Pending",
    amount: "₹18,000",
    type: ["all", "event"],
  },
  {
    id: "EV004",
    customerName: "Music Festival Org",
    groundName: "Riverside Stadium",
    groundOwner: "Nikolai Schm...",
    dateTime: "2025-03-18 04:00 PM",
    status: "Available",
    payment: "Paid",
    amount: "₹25,000",
    type: ["all", "event"],
  },
  {
    id: "EV005",
    customerName: "Sports Tournament",
    groundName: "Championship Arena",
    groundOwner: "Clayton Char...",
    dateTime: "2025-03-19 09:00 AM",
    status: "Pending",
    payment: "Pending",
    amount: "₹20,000",
    type: ["all", "event"],
  },

  // Additional records for pagination testing
  {
    id: "BK0111",
    customerName: "Robert Johnson",
    groundName: "Victory Field",
    groundOwner: "John Admin",
    dateTime: "2025-03-11 10:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹1,300",
    type: ["all"],
  },
  {
    id: "BK0112",
    customerName: "Emma Wilson",
    groundName: "Greenfield Stadium",
    groundOwner: "Jaiden Nixon",
    dateTime: "2025-03-12 02:00 PM",
    status: "Pending",
    payment: "Pending",
    amount: "₹1,700",
    type: ["all"],
  },
  {
    id: "BK0113",
    customerName: "David Miller",
    groundName: "Sunset Arena",
    groundOwner: "Ace Foley",
    dateTime: "2025-03-13 09:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹1,500",
    type: ["all"],
  },
  {
    id: "BK0114",
    customerName: "Sophia Lee",
    groundName: "Mountain View Stadium",
    groundOwner: "Nikolai Schm...",
    dateTime: "2025-03-14 04:00 PM",
    status: "Pending",
    payment: "Pending",
    amount: "₹1,800",
    type: ["all"],
  },
  {
    id: "BK0115",
    customerName: "James Taylor",
    groundName: "Riverside Field",
    groundOwner: "Clayton Char...",
    dateTime: "2025-03-15 11:00 AM",
    status: "Available",
    payment: "Paid",
    amount: "₹1,400",
    type: ["all"],
  },
];

interface BookingsListProps {
  defaultTab?: string;
}

export function BookingsList({ defaultTab = "all" }: BookingsListProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  // Set active tab based on defaultTab prop
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  // Filter bookings based on active tab and search query
  const filteredBookings = useMemo(() => {
    // First filter by tab type
    const tabFilteredBookings = allBookings.filter((booking) =>
      booking.type.includes(activeTab)
    );

    // Then filter by search query if present
    if (!searchQuery.trim()) return tabFilteredBookings;

    const query = searchQuery.toLowerCase();
    return tabFilteredBookings.filter(
      (booking) =>
        booking.id.toLowerCase().includes(query) ||
        booking.customerName.toLowerCase().includes(query) ||
        booking.groundName.toLowerCase().includes(query) ||
        booking.groundOwner.toLowerCase().includes(query)
    );
  }, [activeTab, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const paginatedBookings = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredBookings.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredBookings, currentPage]);

  // Handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-4">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <div className="flex-1 md:max-w-sm">
            <Input
              type="search"
              placeholder="Search Booking id etc."
              className="h-9"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-500 whitespace-nowrap"
        >
          View Refund complaints
        </Button>
      </div>

      <div className="rounded-lg border bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking Id</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Ground Name</TableHead>
                <TableHead>Ground Owner</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedBookings.length > 0 ? (
                paginatedBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>{booking.customerName}</TableCell>
                    <TableCell>{booking.groundName}</TableCell>
                    <TableCell>{booking.groundOwner}</TableCell>
                    <TableCell>{booking.dateTime}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={cn(
                          "capitalize",
                          booking.status === "Available" &&
                            "bg-green-100 text-green-700",
                          booking.status === "Pending" &&
                            "bg-yellow-100 text-yellow-700"
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
                            "bg-green-100 text-green-700",
                          booking.payment === "N/A" &&
                            "bg-gray-100 text-gray-700"
                        )}
                      >
                        {booking.payment}
                      </Badge>
                    </TableCell>
                    <TableCell>{booking.amount}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center">
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

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          // Show first page, last page, and pages around current page
          let pageToShow = i + 1;
          if (totalPages > 5) {
            if (currentPage <= 3) {
              pageToShow = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageToShow = totalPages - 4 + i;
            } else {
              pageToShow = currentPage - 2 + i;
            }
          }
          return (
            <Button
              key={pageToShow}
              variant={currentPage === pageToShow ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(pageToShow)}
            >
              {pageToShow}
            </Button>
          );
        })}
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
  );
}
