import { Card } from "@/components/ui/card";

export function TotalBookingCard() {
  return (
    <Card className="p-4">
      <div className="text-xs text-gray-500">This Month</div>
      <div className="text-sm font-medium mt-1">Total Booking</div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center">
          <div className="w-full h-[3px] bg-red-200 rounded-full"></div>
          <div className="text-[11px] font-medium text-gray-600 mt-2">
            Rejected
          </div>
          <div className="mt-1">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50 border border-red-200">
              <span className="text-[11px] text-red-500">16</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full h-[3px] bg-yellow-200 rounded-full"></div>
          <div className="text-[11px] font-medium text-gray-600 mt-2">
            Pending
          </div>
          <div className="mt-1">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-50 border border-yellow-200">
              <span className="text-[11px] text-yellow-500">45</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full h-[3px] bg-green-200 rounded-full"></div>
          <div className="text-[11px] font-medium text-gray-600 mt-2">
            Approved
          </div>
          <div className="mt-1">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 border border-green-200">
              <span className="text-[11px] text-green-500">2113</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
