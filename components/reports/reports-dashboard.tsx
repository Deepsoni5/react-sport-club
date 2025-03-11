"use client";

import {
  Building2,
  Users,
  Grid,
  CalendarCheck,
  AlertCircle,
  Download,
} from "lucide-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample data for the revenue chart
const revenueData = [
  { name: "Nov 1", value: 4000 },
  { name: "Nov 5", value: 3000 },
  { name: "Nov 10", value: 2000 },
  { name: "Nov 15", value: 2780 },
  { name: "Nov 20", value: 1890 },
  { name: "Nov 25", value: 2390 },
  { name: "Nov 30", value: 3490 },
];

// Sample data for the revenue breakdown
const revenueBreakdown = [
  { name: "Grounds", value: 747859, percentage: "78%", color: "#2563eb" },
  { name: "Market place", value: 175250, percentage: "12%", color: "#f59e0b" },
  { name: "Subscription", value: 95858, percentage: "10%", color: "#ef4444" },
];

// Sample data for peak booking hours
const peakHoursData = [
  { time: "5-8 am", value: 30 },
  { time: "8-10 am", value: 45 },
  { time: "10-12 am", value: 60 },
  { time: "12-2 pm", value: 40 },
  { time: "2-4 pm", value: 30 },
  { time: "4-6 pm", value: 35 },
  { time: "6-8 pm", value: 45 },
  { time: "8-10 pm", value: 55 },
  { time: "10-12 pm", value: 40 },
];

export function ReportsDashboard() {
  const [timeRange, setTimeRange] = useState("month");
  const [location, setLocation] = useState("hyderabad");

  return (
    <div className="space-y-6">
      {/* Platform Overview */}
      <section>
        <h2 className="text-lg font-medium mb-4">Platform Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="bg-blue-50">
            <CardHeader className="p-4 pb-2">
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className="text-2xl">₹ 5.5Cr</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <Building2 className="h-5 w-5 text-blue-500" />
            </CardContent>
          </Card>

          <Card className="bg-purple-50">
            <CardHeader className="p-4 pb-2">
              <CardDescription>Total Users</CardDescription>
              <CardTitle className="text-2xl">105,949</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <Users className="h-5 w-5 text-purple-500" />
            </CardContent>
          </Card>

          <Card className="bg-orange-50">
            <CardHeader className="p-4 pb-2">
              <CardDescription>Total Grounds</CardDescription>
              <CardTitle className="text-2xl">4,438</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <Grid className="h-5 w-5 text-orange-500" />
            </CardContent>
          </Card>

          <Card className="bg-green-50">
            <CardHeader className="p-4 pb-2">
              <CardDescription>Total Bookings</CardDescription>
              <CardTitle className="text-2xl">250,889</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <CalendarCheck className="h-5 w-5 text-green-500" />
            </CardContent>
          </Card>

          <Card className="bg-pink-50">
            <CardHeader className="p-4 pb-2">
              <CardDescription>Complaints Received / Resolved</CardDescription>
              <CardTitle className="text-2xl">1,889 / 1,885</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <AlertCircle className="h-5 w-5 text-pink-500" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Revenue Analytics */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <div>
              <CardTitle>Revenue Analytics</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle>Revenue Breakdown</CardTitle>
            <Button variant="outline" size="sm">
              Report
            </Button>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[200px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueBreakdown}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                  >
                    {revenueBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {revenueBreakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>₹{item.value.toLocaleString()}</span>
                    <span className="text-gray-500">{item.percentage}</span>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between border-t pt-2 font-medium">
                <span>Total Revenue</span>
                <span>₹547,912</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bottom Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Refunds & Cancellations */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <div>
              <CardTitle>Refunds & Cancellations</CardTitle>
              <CardDescription className="mt-1">1,889</CardDescription>
            </div>
            <Select defaultValue={timeRange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span>Cancellations</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>1,643</span>
                  <span className="text-red-500">106,524</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-orange-500" />
                  <span>Refunds</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>246</span>
                  <span className="text-orange-500">8,977</span>
                </div>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <span className="font-medium">Total</span>
                <div className="flex items-center gap-4">
                  <span>1,889</span>
                  <span className="text-red-500">115,401</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Peak Booking Hours */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle>Peak Booking Hours Across Locations</CardTitle>
            <Select defaultValue={location} onValueChange={setLocation}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={peakHoursData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
