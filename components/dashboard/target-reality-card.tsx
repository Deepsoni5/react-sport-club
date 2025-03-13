"use client";

import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", target: 8000, reality: 6500 },
  { month: "Feb", target: 9000, reality: 7500 },
  { month: "Mar", target: 8500, reality: 7000 },
  { month: "Apr", target: 9500, reality: 8000 },
  { month: "May", target: 10000, reality: 8500 },
  { month: "Jun", target: 11000, reality: 9500 },
  { month: "Jul", target: 10500, reality: 9000 },
  { month: "Aug", target: 11500, reality: 10000 },
];

export function TargetRealityCard() {
  return (
    <Card className="p-4">
      <div className="text-sm font-medium">Target vs Reality</div>

      <div className="mt-4 h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              fontSize={10}
              tickMargin={5}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              fontSize={10}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Bar
              dataKey="target"
              fill="#fbbf24"
              radius={[4, 4, 0, 0]}
              barSize={12}
            />
            <Bar
              dataKey="reality"
              fill="#22c55e"
              radius={[4, 4, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
          <span className="text-gray-600">Reality Customer: 2,113</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="text-gray-600">Target Customer: 10,000</span>
        </div>
      </div>
    </Card>
  );
}
