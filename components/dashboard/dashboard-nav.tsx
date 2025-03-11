import {
  BarChart3,
  Box,
  CreditCard,
  Grid,
  LayoutDashboard,
  Package,
  ShieldCheck,
  Users,
} from "lucide-react";

// This component provides the navigation items for your dashboard
// You can pass these to your existing sidebar component
export const dashboardNavItems = [
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
