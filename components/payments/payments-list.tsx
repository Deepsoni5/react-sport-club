"use client";

import { useState, useMemo } from "react";
import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

// Sample data for subscriptions
const subscriptions = [
  {
    id: "SUB-001",
    adminName: "John Admin",
    planType: "Premium",
    status: "Available",
    renewalDate: "2024-04-15",
  },
  {
    id: "SUB-002",
    adminName: "Jaiden Nixon",
    planType: "Basic",
    status: "Available",
    renewalDate: "2024-04-05",
  },
  {
    id: "SUB-003",
    adminName: "Ace Foley",
    planType: "Standard",
    status: "Expired",
    renewalDate: "2024-04-22",
  },
  {
    id: "SUB-004",
    adminName: "Nikolai Schm...",
    planType: "Premium",
    status: "Expired",
    renewalDate: "2024-04-05",
  },
  {
    id: "SUB-005",
    adminName: "Clayton Char...",
    planType: "Standard",
    status: "Available",
    renewalDate: "2024-04-05",
  },
  {
    id: "SUB-006",
    adminName: "Prince Chen",
    planType: "Standard",
    status: "Available",
    renewalDate: "2024-09-21",
  },
  {
    id: "SUB-007",
    adminName: "Reece Duran",
    planType: "Premium",
    status: "Expired",
    renewalDate: "2024-07-05",
  },
  {
    id: "SUB-008",
    adminName: "Anastasia M...",
    planType: "Premium",
    status: "Expired",
    renewalDate: "2024-04-05",
  },
  {
    id: "SUB-009",
    adminName: "Melvin Boyle",
    planType: "Basic",
    status: "Available",
    renewalDate: "2024-04-05",
  },
  {
    id: "SUB-010",
    adminName: "Kailee Thomas",
    planType: "Basic",
    status: "Available",
    renewalDate: "2024-04-05",
  },
  // Additional subscriptions for pagination
  {
    id: "SUB-011",
    adminName: "Sarah Johnson",
    planType: "Premium",
    status: "Available",
    renewalDate: "2024-04-15",
  },
  {
    id: "SUB-012",
    adminName: "Michael Brown",
    planType: "Basic",
    status: "Expired",
    renewalDate: "2024-05-20",
  },
  {
    id: "SUB-013",
    adminName: "Emily Davis",
    planType: "Standard",
    status: "Available",
    renewalDate: "2024-06-10",
  },
  {
    id: "SUB-014",
    adminName: "Robert Wilson",
    planType: "Premium",
    status: "Expired",
    renewalDate: "2024-05-15",
  },
  {
    id: "SUB-015",
    adminName: "Jennifer Lee",
    planType: "Basic",
    status: "Available",
    renewalDate: "2024-07-01",
  },
];

export function PaymentsList() {
  const [activeTab, setActiveTab] = useState("subscription");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const itemsPerPage = 10;

  // Calculate pagination
  const totalPages = Math.ceil(subscriptions.length / itemsPerPage);
  const paginatedSubscriptions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return subscriptions.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  // Handle checkbox selection
  const toggleSelectAll = () => {
    if (selectedItems.length === paginatedSubscriptions.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(paginatedSubscriptions.map((sub) => sub.id));
    }
  };

  const toggleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
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
      <Tabs
        defaultValue="subscription"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="w-full justify-start h-auto p-0 bg-transparent gap-4 md:gap-8 border-b rounded-none overflow-x-auto">
          <TabsTrigger
            value="subscription"
            className={cn(
              "relative h-9 rounded-none border-b-2 border-transparent pb-3 pt-2 font-semibold whitespace-nowrap",
              "data-[state=active]:border-primary",
              "focus-visible:ring-offset-0 focus-visible:ring-0"
            )}
          >
            Subscription Details Table
          </TabsTrigger>
          <TabsTrigger
            value="refund"
            className={cn(
              "relative h-9 rounded-none border-b-2 border-transparent pb-3 pt-2 font-semibold whitespace-nowrap",
              "data-[state=active]:border-primary",
              "focus-visible:ring-offset-0 focus-visible:ring-0"
            )}
          >
            Refund Complaints Table
          </TabsTrigger>
        </TabsList>

        <TabsContent value="subscription" className="mt-4">
          <div className="rounded-lg border bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox
                        checked={
                          selectedItems.length === paginatedSubscriptions.length
                        }
                        onCheckedChange={toggleSelectAll}
                        aria-label="Select all"
                      />
                    </TableHead>
                    <TableHead>Subscription ID</TableHead>
                    <TableHead>Ground Admin Name</TableHead>
                    <TableHead>Plan Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Renewal Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedSubscriptions.map((subscription) => (
                    <TableRow key={subscription.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedItems.includes(subscription.id)}
                          onCheckedChange={() =>
                            toggleSelectItem(subscription.id)
                          }
                          aria-label={`Select ${subscription.adminName}`}
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {subscription.id}
                      </TableCell>
                      <TableCell>{subscription.adminName}</TableCell>
                      <TableCell>{subscription.planType}</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={cn(
                            "capitalize",
                            subscription.status === "Available" &&
                              "bg-green-100 text-green-700",
                            subscription.status === "Expired" &&
                              "bg-red-100 text-red-700"
                          )}
                        >
                          {subscription.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {format(
                          new Date(subscription.renewalDate),
                          "d MMMM yyyy"
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="link"
                            className="h-auto p-0 text-blue-500"
                          >
                            Renew
                          </Button>
                          <Button
                            variant="link"
                            className="h-auto p-0 text-blue-500"
                          >
                            Upgrade
                          </Button>
                          <Button
                            variant="link"
                            className="h-auto p-0 text-blue-500"
                          >
                            Cancel
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-4">
            <div className="text-sm text-gray-500">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, subscriptions.length)} of{" "}
              {subscriptions.length} entries
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
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="refund" className="mt-4">
          <div className="text-center py-8 text-gray-500">
            No refund complaints found
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
