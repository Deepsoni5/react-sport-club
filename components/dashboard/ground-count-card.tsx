import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function GroundCountCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-500">Book Ground</div>
            <div className="text-2xl font-bold">3,988</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Available Ground</div>
            <div className="text-2xl font-bold">450</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative h-32 w-32">
            <svg className="h-full w-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset="70"
                transform="rotate(-90 50 50)"
              />
              <circle cx="85" cy="50" r="5" fill="#4f46e5" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold">4,438</div>
              <div className="text-sm text-gray-500">Total Grounds</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
