import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TotalBookingCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="text-sm text-gray-500">This Month</div>
        <CardTitle>Total Booking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center rounded-md bg-red-100 p-3">
            <div className="text-sm font-medium text-gray-600">Rejected</div>
            <div className="mt-1 flex items-center gap-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-200">
                <span className="text-xs text-red-500">✕</span>
              </div>
              <span className="text-lg font-semibold">16</span>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-md bg-yellow-100 p-3">
            <div className="text-sm font-medium text-gray-600">Pending</div>
            <div className="mt-1 flex items-center gap-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-200">
                <span className="text-xs text-yellow-500">⏱</span>
              </div>
              <span className="text-lg font-semibold">45</span>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-md bg-green-100 p-3">
            <div className="text-sm font-medium text-gray-600">Approved</div>
            <div className="mt-1 flex items-center gap-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-200">
                <span className="text-xs text-green-500">✓</span>
              </div>
              <span className="text-lg font-semibold">2,113</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
