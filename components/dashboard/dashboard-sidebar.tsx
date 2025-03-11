"use client";

import {
  BarChart3,
  Box,
  CreditCard,
  Grid,
  LayoutDashboard,
  LogOut,
  Package,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

export function DashboardSidebar() {
  const pathname = usePathname();
  const { isMobile } = useSidebar();

  const navItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/super-admin/dashboard",
    },
    {
      title: "Ground Admin",
      icon: Users,
      href: "/super-admin/ground-admin",
    },
    {
      title: "Grounds",
      icon: Grid,
      href: "/super-admin/grounds",
    },
    {
      title: "Request Approval",
      icon: ShieldCheck,
      href: "/super-admin/request-approval",
    },
    {
      title: "Bookings",
      icon: Box,
      href: "/super-admin/bookings",
    },
    {
      title: "Products",
      icon: Package,
      href: "/super-admin/products",
    },
    {
      title: "Payments",
      icon: CreditCard,
      href: "/super-admin/payments",
    },
    {
      title: "Reports",
      icon: BarChart3,
      href: "/super-admin/reports",
    },
  ];

  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <Sidebar className="border-r border-gray-200">
      {isMobile && (
        <SidebarHeader className="border-b border-gray-200 p-4 bg-white">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary"></div>
            <span className="text-xl font-bold">BOX OF SPORTZ</span>
          </div>
        </SidebarHeader>
      )}
      <SidebarContent className="sm:mt-16 p-3 pt-4 bg-white">
        <SidebarMenu className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.href} className="my-1">
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={`${isActive ? "bg-primary/10 text-primary font-medium" : ""} py-2`}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-2"
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="truncate">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-200 p-4 bg-white">
        <div className="mb-4 flex flex-col gap-1 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>{formattedTime} (IST)</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Tue - {formattedDate}</span>
          </div>
        </div>
        <Button variant="outline" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
