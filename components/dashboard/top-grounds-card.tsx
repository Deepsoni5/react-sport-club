import { Card } from "@/components/ui/card";

const topGrounds = [
  {
    id: "01",
    name: "Melbourne Cricket Ground",
    owner: "John Admin",
    revenue: "25%",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "02",
    name: "Elite Turf Park",
    owner: "Prince Chen",
    revenue: "15%",
    color: "bg-green-100 text-green-600",
  },
  {
    id: "03",
    name: "Sunrise Sports Arena",
    owner: "Reece Duran",
    revenue: "8%",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "04",
    name: "Skyline Football Field",
    owner: "Kailee Thomas",
    revenue: "7%",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "05",
    name: "Champion's Den",
    owner: "John Admin",
    revenue: "3%",
    color: "bg-pink-100 text-pink-600",
  },
];

export function TopGroundsCard() {
  return (
    <Card className="p-4">
      <div className="text-sm font-medium">Top 5 Performing Grounds</div>

      <div className="mt-4">
        <div className="grid grid-cols-12 text-[10px] text-gray-500 mb-3 px-1">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Ground Name</div>
          <div className="col-span-4">Ground Owner</div>
          <div className="col-span-2 text-right">% from Revenue</div>
        </div>

        <div className="space-y-3">
          {topGrounds.map((ground) => (
            <div
              key={ground.id}
              className="grid grid-cols-12 items-center px-1"
            >
              <div className="col-span-1 text-xs">{ground.id}</div>
              <div className="col-span-5 text-xs font-medium truncate">
                {ground.name}
              </div>
              <div className="col-span-4 text-[11px] text-gray-500 truncate">
                {ground.owner}
              </div>
              <div className="col-span-2 text-right">
                <span
                  className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${ground.color}`}
                >
                  {ground.revenue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
