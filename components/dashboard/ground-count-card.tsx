import { Card } from "@/components/ui/card";

export function GroundCountCard() {
  return (
    <Card className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-gray-500">Book Ground</div>
          <div className="text-xl font-bold mt-1">3,988</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Available Ground</div>
          <div className="text-xl font-bold mt-1">450</div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="relative h-[100px] w-[100px]">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="10"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4f46e5"
              strokeWidth="10"
              strokeDasharray="282.7"
              strokeDashoffset="70"
            />
            {/* Blue dot */}
            <circle
              cx="85"
              cy="50"
              r="4"
              fill="#4f46e5"
              className="rotate-90"
              transform="rotate(90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-lg font-bold">4,438</div>
            <div className="text-[10px] text-gray-500">Total Grounds</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
