"use client";

import { Bell, Menu, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export function DashboardHeader() {
  const { toggleSidebar, isMobile } = useSidebar();
  const pathname = usePathname();

  // Determine the page title based on the current path
  let pageTitle = "Dashboard";
  if (pathname.includes("/ground-admin")) {
    pageTitle = "Ground Admin";
  } else if (pathname.includes("/grounds")) {
    pageTitle = "Grounds";
  } else if (pathname.includes("/request-approval")) {
    pageTitle = "Request Approval";
  } else if (pathname.includes("/bookings")) {
    pageTitle = "Bookings";
  } else if (pathname.includes("/products")) {
    pageTitle = "Products";
  } else if (pathname.includes("/payments")) {
    pageTitle = "Payments";
  } else if (pathname.includes("/reports")) {
    pageTitle = "Reports";
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="flex items-center gap-4">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        )}
        <Link href="/super-admin/dashboard" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Box of Sportz"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="hidden text-xl font-bold text-primary md:inline-block">
            BOX OF SPORTZ
          </span>
        </Link>
        <h1 className="text-xl font-semibold">{pageTitle}</h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 h-8 w-8 md:h-10 md:w-10"
        >
          <Sun className="h-4 w-4 md:h-5 md:w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 h-8 w-8 md:h-10 md:w-10"
        >
          <Bell className="h-4 w-4 md:h-5 md:w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 h-8 w-8 md:h-10 md:w-10"
        >
          <Settings className="h-4 w-4 md:h-5 md:w-5" />
          <span className="sr-only">Settings</span>
        </Button>
        <div className="flex items-center gap-2">
          <div className="hidden flex-col items-end md:flex">
            <span className="text-sm font-medium">Syed Talha</span>
            <span className="text-xs text-primary">Super Admin</span>
          </div>
          <Avatar className="h-8 w-8 md:h-10 md:w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
