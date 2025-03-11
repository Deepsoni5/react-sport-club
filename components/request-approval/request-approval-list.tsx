"use client";

import type React from "react";

import { Filter, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample data for requests
const allRequests = [
  {
    id: 1,
    name: "John Admin",
    businessName: "Verdant Gardens",
    phone: "+91 8639211485",
    email: "john1554@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "rejected",
    type: "new",
  },
  {
    id: 2,
    name: "John Wick",
    businessName: "Peachy Green Landscapes",
    phone: "+91 9988776655",
    email: "john123@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "rejected",
    type: "new",
  },
  {
    id: 3,
    name: "John Admin",
    businessName: "Verdant Gardens",
    phone: "+91 8639211485",
    email: "john1554@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "rejected",
    type: "new",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    businessName: "Green Thumb Gardens",
    phone: "+91 9876543210",
    email: "sarah.j@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "pending",
    type: "new",
  },
  {
    id: 5,
    name: "Michael Chen",
    businessName: "Urban Oasis",
    phone: "+91 8765432109",
    email: "michael.chen@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "approved",
    type: "new",
  },
  {
    id: 6,
    name: "Emma Wilson",
    businessName: "Blooming Meadows",
    phone: "+91 7654321098",
    email: "emma.w@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "rejected",
    type: "new",
  },
  {
    id: 7,
    name: "David Rodriguez",
    businessName: "Sunset Gardens",
    phone: "+91 6543210987",
    email: "david.r@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "pending",
    type: "new",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    businessName: "Harmony Landscapes",
    phone: "+91 5432109876",
    email: "olivia.m@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "approved",
    type: "new",
  },
  {
    id: 9,
    name: "James Taylor",
    businessName: "Evergreen Designs",
    phone: "+91 4321098765",
    email: "james.t@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "rejected",
    type: "new",
  },
  {
    id: 10,
    name: "Sophia Lee",
    businessName: "Tranquil Spaces",
    phone: "+91 3210987654",
    email: "sophia.l@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "pending",
    type: "new",
  },
  {
    id: 11,
    name: "Daniel Brown",
    businessName: "Nature's Touch",
    phone: "+91 2109876543",
    email: "daniel.b@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "approved",
    type: "new",
  },
  {
    id: 12,
    name: "Isabella Garcia",
    businessName: "Serene Gardens",
    phone: "+91 1098765432",
    email: "isabella.g@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "rejected",
    type: "new",
  },
  // Ground add requests
  {
    id: 101,
    name: "Cricket Ground 1",
    businessName: "Sports Complex A",
    phone: "+91 9876543210",
    email: "sports.complex.a@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "pending",
    type: "ground",
  },
  {
    id: 102,
    name: "Football Field 2",
    businessName: "Sports Complex B",
    phone: "+91 8765432109",
    email: "sports.complex.b@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "approved",
    type: "ground",
  },
  {
    id: 103,
    name: "Tennis Court 3",
    businessName: "Sports Complex C",
    phone: "+91 7654321098",
    email: "sports.complex.c@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "rejected",
    type: "ground",
  },
  {
    id: 104,
    name: "Basketball Court 4",
    businessName: "Sports Complex D",
    phone: "+91 6543210987",
    email: "sports.complex.d@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "pending",
    type: "ground",
  },
  {
    id: 105,
    name: "Swimming Pool 5",
    businessName: "Sports Complex E",
    phone: "+91 5432109876",
    email: "sports.complex.e@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "approved",
    type: "ground",
  },
  // Admin changes
  {
    id: 201,
    name: "Admin Change 1",
    businessName: "Profile Update",
    phone: "+91 9876543210",
    email: "admin1@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "pending",
    type: "changes",
  },
  {
    id: 202,
    name: "Admin Change 2",
    businessName: "Contact Update",
    phone: "+91 8765432109",
    email: "admin2@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "approved",
    type: "changes",
  },
  {
    id: 203,
    name: "Admin Change 3",
    businessName: "Business Info Update",
    phone: "+91 7654321098",
    email: "admin3@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
    status: "rejected",
    type: "changes",
  },
];

// Tab options for the dropdown
const tabOptions = [
  { value: "new", label: "New admin requests" },
  { value: "ground", label: "Ground add requests" },
  { value: "changes", label: "Admin changes" },
];

export function RequestApprovalList() {
  const [activeTab, setActiveTab] = useState("new");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 3;

  // Filter requests based on active tab and search query
  const filteredRequests = useMemo(() => {
    return allRequests.filter((request) => {
      // Filter by tab type
      const typeMatch = request.type === activeTab;

      // If no search query, just filter by type
      if (!searchQuery.trim()) return typeMatch;

      // Filter by search query
      const query = searchQuery.toLowerCase();
      return (
        typeMatch &&
        (request.name.toLowerCase().includes(query) ||
          request.businessName.toLowerCase().includes(query) ||
          request.email.toLowerCase().includes(query) ||
          request.phone.includes(query))
      );
    });
  }, [activeTab, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const paginatedRequests = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredRequests.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredRequests, currentPage]);

  // Reset to first page when tab or search changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Count requests by type
  const requestCounts = useMemo(() => {
    return {
      new: allRequests.filter((r) => r.type === "new").length,
      ground: allRequests.filter((r) => r.type === "ground").length,
      changes: allRequests.filter((r) => r.type === "changes").length,
    };
  }, []);

  // Get current tab label for mobile dropdown
  const getCurrentTabLabel = () => {
    const tab = tabOptions.find((t) => t.value === activeTab);
    return tab ? tab.label : "Select tab";
  };

  return (
    <div className="space-y-4">
      <Tabs
        defaultValue="new"
        className="w-full"
        onValueChange={handleTabChange}
        value={activeTab}
      >
        {/* Mobile Dropdown for Tabs */}
        <div className="md:hidden mb-4">
          <Select value={activeTab} onValueChange={handleTabChange}>
            <SelectTrigger className="w-full">
              <SelectValue>
                <div className="flex items-center justify-between">
                  <span>{getCurrentTabLabel()}</span>
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-green-100 text-green-700"
                  >
                    {requestCounts[activeTab as keyof typeof requestCounts]}
                  </Badge>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {tabOptions.map((tab) => (
                <SelectItem key={tab.value} value={tab.value}>
                  <div className="flex items-center justify-between w-full">
                    <span>{tab.label}</span>
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-green-100 text-green-700"
                    >
                      {requestCounts[tab.value as keyof typeof requestCounts]}
                    </Badge>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Tabs */}
        <TabsList className="w-full justify-start h-auto p-0 bg-transparent gap-8 border-b rounded-none hidden md:flex">
          <TabsTrigger
            value="new"
            className={cn(
              "relative h-9 rounded-none border-b-2 border-transparent pb-3 pt-2 font-semibold",
              "data-[state=active]:border-primary",
              "focus-visible:ring-offset-0 focus-visible:ring-0"
            )}
          >
            New admin requests
            <Badge
              variant="secondary"
              className="ml-2 bg-green-100 text-green-700"
            >
              {requestCounts.new}
            </Badge>
          </TabsTrigger>
          <TabsTrigger
            value="ground"
            className={cn(
              "relative h-9 rounded-none border-b-2 border-transparent pb-3 pt-2 font-semibold",
              "data-[state=active]:border-primary",
              "focus-visible:ring-offset-0 focus-visible:ring-0"
            )}
          >
            ground add requests
            <Badge
              variant="secondary"
              className="ml-2 bg-green-100 text-green-700"
            >
              {requestCounts.ground}
            </Badge>
          </TabsTrigger>
          <TabsTrigger
            value="changes"
            className={cn(
              "relative h-9 rounded-none border-b-2 border-transparent pb-3 pt-2 font-semibold",
              "data-[state=active]:border-primary",
              "focus-visible:ring-offset-0 focus-visible:ring-0"
            )}
          >
            Admin changes
            <Badge
              variant="secondary"
              className="ml-2 bg-green-100 text-green-700"
            >
              {requestCounts.changes}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <div className="flex-1 md:max-w-sm">
            <Input
              type="search"
              placeholder="Search Request..."
              className="h-9"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Tab contents */}
        {["new", "ground", "changes"].map((tabValue) => (
          <TabsContent
            key={tabValue}
            value={tabValue}
            className="mt-4 space-y-4"
          >
            {activeTab === tabValue && (
              <>
                {paginatedRequests.length > 0 ? (
                  <>
                    {paginatedRequests.map((request) => (
                      <div
                        key={request.id}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-lg border bg-white p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <Image
                              src={request.image || "/placeholder.svg"}
                              alt={request.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-medium">{request.name}</h3>
                            <div className="text-sm text-gray-500">
                              <div>Business Name: {request.businessName}</div>
                              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                                <span>Phone Number: {request.phone}</span>
                                <span className="hidden md:inline">•</span>
                                <span>{request.email}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 md:flex-shrink-0">
                          <Button className="h-9 bg-green-500 hover:bg-green-600">
                            View Details
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Badge
                            variant="secondary"
                            className={cn(
                              "px-4 py-1 capitalize",
                              request.status === "rejected" &&
                                "bg-red-100 text-red-700",
                              request.status === "approved" &&
                                "bg-green-100 text-green-700",
                              request.status === "pending" &&
                                "bg-yellow-100 text-yellow-700"
                            )}
                          >
                            {request.status}
                          </Badge>
                        </div>
                      </div>
                    ))}

                    {/* Pagination */}
                    {filteredRequests.length > itemsPerPage && (
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4">
                        <div className="text-sm text-gray-500">
                          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                          {Math.min(
                            currentPage * itemsPerPage,
                            filteredRequests.length
                          )}{" "}
                          of {filteredRequests.length} entries
                        </div>
                        <div className="flex items-center justify-center md:justify-end gap-2 flex-wrap">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              setCurrentPage((p) => Math.max(1, p - 1))
                            }
                            disabled={currentPage === 1}
                          >
                            Previous
                          </Button>
                          {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                          ).map((page) => (
                            <Button
                              key={page}
                              variant={
                                currentPage === page ? "default" : "outline"
                              }
                              size="sm"
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </Button>
                          ))}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              setCurrentPage((p) => Math.min(totalPages, p + 1))
                            }
                            disabled={currentPage === totalPages}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    {searchQuery
                      ? "No matching requests found"
                      : "No requests found"}
                  </div>
                )}
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
