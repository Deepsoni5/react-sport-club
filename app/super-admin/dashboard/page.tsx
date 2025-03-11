import { GroundRegisterCard } from "@/components/dashboard/ground-register-card";
import { TotalBookingCard } from "@/components/dashboard/total-booking-card";
import { GroundCountCard } from "@/components/dashboard/ground-count-card";
import { RevenueCard } from "@/components/dashboard/revenue-card";
import { TopGroundsCard } from "@/components/dashboard/top-grounds-card";
import { TopSellingProductCard } from "@/components/dashboard/top-selling-product-card";

export default function SuperAdminDashboard() {
  return (
    <main className="flex-1 overflow-auto p-4 w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-full">
        <GroundRegisterCard />
        <TotalBookingCard />
        <GroundCountCard />
        <RevenueCard />
        <TopGroundsCard />
        <TopSellingProductCard />
      </div>
    </main>
  );
}
