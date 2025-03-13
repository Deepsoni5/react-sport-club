import { GroundRegisterCard } from "@/components/dashboard/ground-register-card";
import { TotalBookingCard } from "@/components/dashboard/total-booking-card";
import { GroundCountCard } from "@/components/dashboard/ground-count-card";
import { RevenueCard } from "@/components/dashboard/revenue-card";
import { TopGroundsCard } from "@/components/dashboard/top-grounds-card";
import { TopSellingProductCard } from "@/components/dashboard/top-selling-product-card";
import { TargetRealityCard } from "@/components/dashboard/target-reality-card";
import { TotalUserCard } from "@/components/dashboard/total-user-card";

export default function SuperAdminDashboard() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="grid gap-4">
        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <GroundRegisterCard />
          <TotalBookingCard />
          <GroundCountCard />
          <TotalUserCard />
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RevenueCard />
          <TargetRealityCard />
        </div>

        {/* Third row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TopGroundsCard />
          <TopSellingProductCard />
        </div>
      </div>
    </main>
  );
}
