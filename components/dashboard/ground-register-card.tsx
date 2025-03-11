"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GroundRegisterCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Sample data for the chart
    const data = [
      20, 25, 30, 35, 25, 35, 45, 40, 50, 60, 55, 65, 70, 65, 75, 85, 80, 90,
      85, 95,
    ];
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue;
    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;
    const padding = 10;
    const chartWidth = canvasWidth - padding * 2;
    const chartHeight = canvasHeight - padding * 2;
    const pointSpacing = chartWidth / (data.length - 1);

    // Draw the line
    ctx.beginPath();
    ctx.strokeStyle = "#22c55e";
    ctx.lineWidth = 2;

    data.forEach((value, index) => {
      const x = padding + index * pointSpacing;
      const normalizedValue = (value - minValue) / range;
      const y = canvasHeight - padding - normalizedValue * chartHeight;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
  }, []);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="text-sm text-gray-500">This Month</div>
        <CardTitle>Ground Register</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="text-4xl font-bold">1568</div>
          <div className="flex items-center text-sm font-medium text-green-500">
            <ArrowUpRight className="h-4 w-4" />
            18.34%
          </div>
        </div>
        <div className="mt-4 h-24">
          <canvas
            ref={canvasRef}
            width={300}
            height={96}
            className="w-full h-full"
          ></canvas>
        </div>
      </CardContent>
    </Card>
  );
}
