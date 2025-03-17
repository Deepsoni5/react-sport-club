"use client";

import {
  CheckCircle2,
  ChevronRight,
  Facebook,
  Filter,
  Instagram,
  Plus,
  Star,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Sample admin data - In a real app, this would come from an API
const adminData = {
  id: "1",
  name: "John Admin",
  businessName: "Verdant Gardens",
  rating: 4.5,
  reviews: 15,
  phone: "+91 8639211485",
  email: "john15548@gmail.com",
  image: "/placeholder.svg?height=200&width=200",
  socialLinks: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  groundStats: {
    total: 15,
    available: 8,
    booked: 7,
  },
};

// Sample grounds data
const allGrounds = [
  {
    id: 1,
    name: "Melbourne Cricket Ground",
    location: "Melbourne",
    usersVisited: "1500",
    rating: "4.5",
    status: "Available",
  },
  {
    id: 2,
    name: "Sunrise Sports Arena",
    location: "Maplewood City",
    usersVisited: "1467",
    rating: "4.2",
    status: "Available",
  },
  {
    id: 3,
    name: "Elite Turf Park",
    location: "Rivertown",
    usersVisited: "1322",
    rating: "4.6",
    status: "Available",
  },
  {
    id: 4,
    name: "Victory Stadium",
    location: "Sunrise Bay",
    usersVisited: "1435",
    rating: "4.3",
    status: "Available",
  },
  {
    id: 5,
    name: "Thunderbolt Arena",
    location: "Evergreen Hills",
    usersVisited: "545",
    rating: "4.4",
    status: "Available",
  },
  {
    id: 6,
    name: "Galaxy Sports Complex",
    location: "Summitville",
    usersVisited: "1440",
    rating: "4.0",
    status: "Booked",
  },
  {
    id: 7,
    name: "Legends Cricket Ground",
    location: "Thunderbrook",
    usersVisited: "1214",
    rating: "4.7",
    status: "Booked",
  },
  {
    id: 8,
    name: "Skyline Football Field",
    location: "Lakeshore City",
    usersVisited: "212",
    rating: "4.0",
    status: "Available",
  },
  {
    id: 9,
    name: "Champion's Den",
    location: "Skyhaven",
    usersVisited: "412",
    rating: "4.0",
    status: "Booked",
  },
  {
    id: 10,
    name: "Royal Arena",
    location: "Grand Vista",
    usersVisited: "146",
    rating: "3.9",
    status: "Available",
  },
  {
    id: 11,
    name: "Riverside Turf Field",
    location: "Melbourne",
    usersVisited: "1250",
    rating: "4.8",
    status: "Booked",
  },
  {
    id: 12,
    name: "Central Stadium",
    location: "Downtown",
    usersVisited: "980",
    rating: "4.1",
    status: "Available",
  },
];

// Sample reviews data
const reviews = [
  {
    id: 1,
    user: {
      name: "Vijay",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    comment:
      "First time I tried this ground and it was great! I loved playing here.",
    ground: {
      name: "Melbourne Cricket Ground",
      image: "/placeholder.svg?height=100&width=200",
      location: "Melbourne",
      views: "1.5k",
    },
  },
  {
    id: 2,
    user: {
      name: "Rohan",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 4,
    comment:
      "Nice ground, good facilities and nice service also. Had a nice time playing here with my friends.",
    ground: {
      name: "Riverside Turf Field",
      image: "/placeholder.svg?height=100&width=200",
      location: "Melbourne",
      views: "1.2k",
    },
  },
  {
    id: 3,
    user: {
      name: "Matthew",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    comment: "Amazing experience, great ground!",
    ground: {
      name: "Riverside Turf Field",
      image: "/placeholder.svg?height=100&width=200",
      location: "Melbourne",
      views: "1.2k",
    },
  },
  {
    id: 4,
    user: {
      name: "Vijay",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    comment: "Fantastic ground, highly recommend for cricket enthusiasts.",
    ground: {
      name: "Melbourne Cricket Ground",
      image: "/placeholder.svg?height=100&width=200",
      location: "Melbourne",
      views: "1.5k",
    },
  },
  {
    id: 5,
    user: {
      name: "Vijay",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 4,
    comment:
      "Great place to play with friends, nice facilities and well maintained.",
    ground: {
      name: "Melbourne Cricket Ground",
      image: "/placeholder.svg?height=100&width=200",
      location: "Melbourne",
      views: "1.5k",
    },
  },
];

interface GroundAdminProfileProps {
  adminId: string;
}

export function GroundAdminProfile({ adminId }: GroundAdminProfileProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  // Filter grounds based on active tab and search query
  const filteredGrounds = useMemo(() => {
    let filtered = [...allGrounds];

    // Filter by tab
    if (activeTab === "available") {
      filtered = filtered.filter((ground) => ground.status === "Available");
    } else if (activeTab === "booked") {
      filtered = filtered.filter((ground) => ground.status === "Booked");
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (ground) =>
          ground.name.toLowerCase().includes(query) ||
          ground.location.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeTab, searchQuery]);

  // Reset to first page when tab or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredGrounds.length / itemsPerPage);
  const paginatedGrounds = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredGrounds.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredGrounds, currentPage]);

  // Rating distribution data
  const ratingDistribution = [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 60 },
    { stars: 3, percentage: 40 },
    { stars: 2, percentage: 20 },
    { stars: 1, percentage: 10 },
  ];

  return (
    <main className="flex-1 overflow-auto p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/super-admin/ground-admin"
            className="text-gray-500 hover:text-gray-700"
          >
            Ground Admin
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-500" />
          <span className="font-medium">{adminData.name}</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm text-green-600">
          <CheckCircle2 className="h-4 w-4" />
          <span>Ground Admin Successfully</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="mb-8 rounded-lg border bg-white p-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="relative h-32 w-32 overflow-hidden rounded-full">
            <Image
              src={adminData.image || "/placeholder.svg"}
              alt={adminData.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-2xl font-semibold">{adminData.name}</h1>
            <p className="text-gray-500">{adminData.businessName}</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(adminData.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{adminData.rating}</span>
              <span className="text-gray-500">
                ({adminData.reviews} reviews)
              </span>
            </div>
            <div className="mt-4 flex flex-col items-center gap-4 md:flex-row">
              <div className="flex items-center gap-6">
                <div className="text-center md:text-left">
                  <div className="text-sm text-gray-500">Phone Number</div>
                  <div className="font-medium">{adminData.phone}</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-sm text-gray-500">Email Address</div>
                  <div className="font-medium">{adminData.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href={adminData.socialLinks.facebook}>
                    <Facebook className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={adminData.socialLinks.twitter}>
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={adminData.socialLinks.instagram}>
                    <Instagram className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grounds Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-medium">John Grounds</h2>
          <Button className="gap-2 bg-blue-500 hover:bg-blue-600">
            <Plus className="h-4 w-4" />
            Add Ground
          </Button>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Dropdown for mobile view */}
              <div className="block sm:hidden">
                <select
                  className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                >
                  <option value="all">
                    Total grounds ({adminData.groundStats.total})
                  </option>
                  <option value="available">
                    Available ({adminData.groundStats.available})
                  </option>
                  <option value="booked">
                    Booked ({adminData.groundStats.booked})
                  </option>
                </select>
              </div>

              {/* Tabs for desktop view */}
              <div className="hidden sm:block">
                <TabsList className="h-9 p-1 bg-gray-100">
                  <TabsTrigger
                    value="all"
                    className="rounded-md px-3 py-1.5 text-sm"
                  >
                    Total grounds
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-blue-100 text-blue-700"
                    >
                      {adminData.groundStats.total}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="available"
                    className="rounded-md px-3 py-1.5 text-sm"
                  >
                    Available grounds
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-green-100 text-green-700"
                    >
                      {adminData.groundStats.available}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="booked"
                    className="rounded-md px-3 py-1.5 text-sm"
                  >
                    Booked grounds
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-red-100 text-red-700"
                    >
                      {adminData.groundStats.booked}
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </div>

              <Button variant="outline" size="sm" className="h-9 gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                Filter
              </Button>
            </div>

            <Input
              type="search"
              placeholder="Search..."
              className="h-9 sm:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <TabsContent value="all" className="mt-4">
            <div className="rounded-lg border bg-white">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">S.No</TableHead>
                    <TableHead>Ground Name</TableHead>
                    <TableHead>Ground Location</TableHead>
                    <TableHead>Users Visited</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedGrounds.map((ground, index) => (
                    <TableRow key={ground.id}>
                      <TableCell>
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </TableCell>
                      <TableCell>{ground.name}</TableCell>
                      <TableCell>{ground.location}</TableCell>
                      <TableCell>{ground.usersVisited}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{ground.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={cn(
                            ground.status === "Available"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          )}
                        >
                          {ground.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="available" className="mt-4">
            <div className="rounded-lg border bg-white">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">S.No</TableHead>
                    <TableHead>Ground Name</TableHead>
                    <TableHead>Ground Location</TableHead>
                    <TableHead>Users Visited</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedGrounds.map((ground, index) => (
                    <TableRow key={ground.id}>
                      <TableCell>
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </TableCell>
                      <TableCell>{ground.name}</TableCell>
                      <TableCell>{ground.location}</TableCell>
                      <TableCell>{ground.usersVisited}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{ground.rating}</span>
                        </div>
                      </TableCell>
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
          </TabsContent>

          <TabsContent value="booked" className="mt-4">
            <div className="rounded-lg border bg-white">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">S.No</TableHead>
                    <TableHead>Ground Name</TableHead>
                    <TableHead>Ground Location</TableHead>
                    <TableHead>Users Visited</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedGrounds.map((ground, index) => (
                    <TableRow key={ground.id}>
                      <TableCell>
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </TableCell>
                      <TableCell>{ground.name}</TableCell>
                      <TableCell>{ground.location}</TableCell>
                      <TableCell>{ground.usersVisited}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{ground.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className="bg-red-100 text-red-700"
                        >
                          {ground.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {filteredGrounds.length > 0 && (
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
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
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
                  className="h-8 min-w-[32px]"
                  onClick={() => setCurrentPage(pageToShow)}
                >
                  {pageToShow}
                </Button>
              );
            })}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              ›
            </Button>
          </div>
        )}
      </div>

      {/* Customer Feedback Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-medium">Our Customer Feedback</h2>

        {/* Rating Overview */}
        <div className="rounded-lg border bg-white p-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-bold">{adminData.rating}</div>
            <div className="space-y-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(adminData.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                {adminData.reviews} Reviews
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <div className="text-sm">{item.stars}</div>
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-lg border bg-white p-4">
              <div className="flex items-start gap-4">
                <Image
                  src={review.user.avatar || "/placeholder.svg"}
                  alt={review.user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{review.user.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{review.comment}</p>
                  <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="relative h-20 w-32 overflow-hidden rounded-lg">
                      <Image
                        src={review.ground.image || "/placeholder.svg"}
                        alt={review.ground.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{review.ground.name}</div>
                      <div className="text-sm text-gray-500">
                        {review.ground.location}
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center">
            <Button variant="link">See All Reviews</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
