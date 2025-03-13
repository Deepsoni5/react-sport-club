"use client";

import { Plus, Filter } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

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
import { Badge } from "@/components/ui/badge";

// Sample data for ground admins
const groundAdmins = [
  {
    id: 1,
    fullName: "John Admin",
    businessName: "Verdant Gardens",
    totalGround: 15,
    email: "john15548@gmail.com",
    phone: "+91 8639211485",
  },
  {
    id: 2,
    fullName: "Jaiden Nixon",
    businessName: "Ember Creative",
    totalGround: 2,
    email: "jaiden.n@gmail.com",
    phone: "+91 8949866541",
  },
  {
    id: 3,
    fullName: "Ace Foley",
    businessName: "Pulse Tech",
    totalGround: 13,
    email: "ace.fo@yahoo.com",
    phone: "+91 9847899888",
  },
  {
    id: 4,
    fullName: "Nikolai Schmidt",
    businessName: "Harmony Wellness",
    totalGround: 10,
    email: "nikolai.schmidt1964@outlook.com",
    phone: "+91 8899663355",
  },
  {
    id: 5,
    fullName: "Clayton Charles",
    businessName: "Echo Media",
    totalGround: 5,
    email: "me@clayton.com",
    phone: "+91 8188554477",
  },
  {
    id: 6,
    fullName: "Prince Chen",
    businessName: "Verdant Gardens",
    totalGround: 7,
    email: "prince.chen1997@gmail.com",
    phone: "+91 9988774588",
  },
  {
    id: 7,
    fullName: "Reece Duran",
    businessName: "Axiom Designs",
    totalGround: 2,
    email: "reece@yahoo.com",
    phone: "+91 8866248895",
  },
  {
    id: 8,
    fullName: "Anastasia Mcdaniel",
    businessName: "Serene Spa Retreat",
    totalGround: 1,
    email: "anastasia.spring@mcdaniel12.com",
    phone: "+91 8877456358",
  },
  {
    id: 9,
    fullName: "Melvin Boyle",
    businessName: "Nova Fitness",
    totalGround: 5,
    email: "Me.boyle@gmail.com",
    phone: "+91 9948668896",
  },
  {
    id: 10,
    fullName: "Kailee Thomas",
    businessName: "Pulse Tech",
    totalGround: 10,
    email: "Kailee.thomas@gmail.com",
    phone: "(570) 344-0239",
  },
  {
    id: 11,
    fullName: "Raj Sharma",
    businessName: "Fitness Hub",
    totalGround: 8,
    email: "raj.sharma@gmail.com",
    phone: "+91 9876543210",
  },
  {
    id: 12,
    fullName: "Priya Patel",
    businessName: "Sports Arena",
    totalGround: 6,
    email: "priya.patel@gmail.com",
    phone: "+91 9876543211",
  },
  {
    id: 13,
    fullName: "Amit Kumar",
    businessName: "Cricket Academy",
    totalGround: 12,
    email: "amit.kumar@gmail.com",
    phone: "+91 9876543212",
  },
  {
    id: 14,
    fullName: "Sneha Reddy",
    businessName: "Tennis Club",
    totalGround: 4,
    email: "sneha.reddy@gmail.com",
    phone: "+91 9876543213",
  },
  {
    id: 15,
    fullName: "Vikram Singh",
    businessName: "Football Ground",
    totalGround: 9,
    email: "vikram.singh@gmail.com",
    phone: "+91 9876543214",
  },
  {
    id: 16,
    fullName: "Neha Gupta",
    businessName: "Badminton Court",
    totalGround: 3,
    email: "neha.gupta@gmail.com",
    phone: "+91 9876543215",
  },
  {
    id: 17,
    fullName: "Rahul Verma",
    businessName: "Swimming Pool",
    totalGround: 2,
    email: "rahul.verma@gmail.com",
    phone: "+91 9876543216",
  },
  {
    id: 18,
    fullName: "Ananya Sharma",
    businessName: "Yoga Center",
    totalGround: 5,
    email: "ananya.sharma@gmail.com",
    phone: "+91 9876543217",
  },
  {
    id: 19,
    fullName: "Karan Malhotra",
    businessName: "Basketball Court",
    totalGround: 7,
    email: "karan.malhotra@gmail.com",
    phone: "+91 9876543218",
  },
  {
    id: 20,
    fullName: "Divya Kapoor",
    businessName: "Table Tennis Academy",
    totalGround: 4,
    email: "divya.kapoor@gmail.com",
    phone: "+91 9876543219",
  },
  {
    id: 21,
    fullName: "Arjun Reddy",
    businessName: "Golf Course",
    totalGround: 1,
    email: "arjun.reddy@gmail.com",
    phone: "+91 9876543220",
  },
  {
    id: 22,
    fullName: "Meera Joshi",
    businessName: "Volleyball Court",
    totalGround: 3,
    email: "meera.joshi@gmail.com",
    phone: "+91 9876543221",
  },
  {
    id: 23,
    fullName: "Sanjay Mehta",
    businessName: "Hockey Field",
    totalGround: 2,
    email: "sanjay.mehta@gmail.com",
    phone: "+91 9876543222",
  },
  {
    id: 24,
    fullName: "Pooja Sharma",
    businessName: "Skating Rink",
    totalGround: 1,
    email: "pooja.sharma@gmail.com",
    phone: "+91 9876543223",
  },
  {
    id: 25,
    fullName: "Ravi Kumar",
    businessName: "Boxing Arena",
    totalGround: 5,
    email: "ravi.kumar@gmail.com",
    phone: "+91 9876543224",
  },
];

export function GroundAdminList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;

  // Filter admins based on search term
  const filteredAdmins = useMemo(() => {
    if (!search.trim()) return groundAdmins;

    const searchLower = search.toLowerCase();
    return groundAdmins.filter(
      (admin) =>
        admin.fullName.toLowerCase().includes(searchLower) ||
        admin.businessName.toLowerCase().includes(searchLower) ||
        admin.email.toLowerCase().includes(searchLower) ||
        admin.phone.includes(search)
    );
  }, [search]);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredAdmins.length / itemsPerPage);
  const paginatedAdmins = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAdmins.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAdmins, currentPage]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button className="gap-2 bg-blue-500 hover:bg-blue-600 h-9 px-4">
          <Plus className="h-4 w-4" />
          NEW GROUND ADMIN
        </Button>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              Filter
            </Button>
            <Badge variant="secondary" className="rounded-md px-2 py-1">
              Top Admins
            </Badge>
            <Badge variant="secondary" className="rounded-md px-2 py-1">
              Hyderabad
            </Badge>
            <Badge variant="secondary" className="rounded-md px-2 py-1">
              +8
            </Badge>
          </div>
          <Input
            type="search"
            placeholder="eg: john15548@gmail.com, etc"
            className="h-9 sm:w-[300px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">S.No</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Business Name</TableHead>
              <TableHead>Total Ground</TableHead>
              <TableHead>E-Mail</TableHead>
              <TableHead>Phone Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedAdmins.map((admin, index) => (
              <TableRow key={admin.id}>
                <TableCell>
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </TableCell>
                <TableCell>{admin.fullName}</TableCell>
                <TableCell>{admin.businessName}</TableCell>
                <TableCell>{admin.totalGround}</TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.phone}</TableCell>
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
  );
}
