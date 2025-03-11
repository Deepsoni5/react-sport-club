"use client";

import { DollarSign } from "lucide-react";
import { useEffect, useRef } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RevenueCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Sample data for the chart
    const data = [
      20, 30, 50, 40, 60, 50, 40, 50, 60, 70, 80, 90, 100, 110, 100, 110, 120,
      130,
    ];
    const maxValue = Math.max(...data);
    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;
    const padding = 20;
    const chartWidth = canvasWidth - padding * 2;
    const chartHeight = canvasHeight - padding * 2;
    const barWidth = chartWidth / data.length;
    const barSpacing = 2;

    // Draw the bars
    data.forEach((value, index) => {
      const barHeight = (value / maxValue) * chartHeight;
      const x = padding + index * barWidth;
      const y = canvasHeight - padding - barHeight;

      // Draw bar background
      ctx.fillStyle = "#e0e7ff";
      ctx.fillRect(x, y, barWidth - barSpacing, barHeight);
    });

    // Draw the line
    ctx.beginPath();
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 2;

    data.forEach((value, index) => {
      const x = padding + index * barWidth + barWidth / 2;
      const y = canvasHeight - padding - (value / maxValue) * chartHeight;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw the point
    const lastIndex = data.length - 1;
    const lastX = padding + lastIndex * barWidth + barWidth / 2;
    const lastY =
      canvasHeight - padding - (data[lastIndex] / maxValue) * chartHeight;

    ctx.beginPath();
    ctx.arc(lastX, lastY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#6366f1";
    ctx.fill();
  }, []);

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-500" />
            <div className="text-lg font-medium">This Month Revenue</div>
          </div>
          <CardTitle className="text-4xl font-bold text-green-500">
            128.7K
          </CardTitle>
        </div>
        <div className="text-right text-sm">
          <div className="text-gray-500">Last Month Revenue 350k</div>
          <div className="text-blue-500">View Full Report</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-4 h-48">
          <canvas
            ref={canvasRef}
            width={600}
            height={192}
            className="w-full h-full"
          ></canvas>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-sm text-gray-500">$1000</div>
            <div className="text-sm text-gray-500">$500</div>
            <div className="text-sm text-gray-500">$200</div>
            <div className="text-sm text-gray-500">$100</div>
          </div>
          <div className="rounded-md bg-gray-100 p-2">
            <div className="text-sm text-gray-500">29 July 00:00</div>
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold">220,342.76</div>
              <div className="rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-600">
                +3.4%
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
