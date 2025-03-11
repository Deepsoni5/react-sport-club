import { Trophy } from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TopGroundsCard() {
  const topGrounds = [
    {
      id: 1,
      name: "Melbourne Cricket Ground",
      admin: "John Admin",
      location: "Melbourne",
      visitors: "10k Visitors",
      image: "/placeholder.svg?height=60&width=100",
    },
    {
      id: 2,
      name: "Melbourne Cricket Ground",
      admin: "John Admin",
      location: "Melbourne",
      visitors: "10k Visitors",
      image: "/placeholder.svg?height=60&width=100",
    },
    {
      id: 3,
      name: "Melbourne Cricket Ground",
      admin: "John Admin",
      location: "Melbourne",
      visitors: "10k Visitors",
      image: "/placeholder.svg?height=60&width=100",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <Trophy className="h-5 w-5 text-blue-500" />
          Top 3 Grounds
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topGrounds.map((ground) => (
            <div key={ground.id} className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                {ground.id}
              </div>
              <div className="overflow-hidden rounded-md">
                <Image
                  src={ground.image || "/placeholder.svg"}
                  alt={ground.name}
                  width={60}
                  height={40}
                  className="h-10 w-16 object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="font-medium">{ground.name}</div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span>{ground.admin}</span>
                  <span>•</span>
                  <span>{ground.location}</span>
                  <span>•</span>
                  <span>{ground.visitors}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
