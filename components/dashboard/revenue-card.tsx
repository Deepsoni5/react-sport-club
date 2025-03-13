"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

export function RevenueCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const padding = 20;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw grid lines
    ctx.beginPath();
    ctx.strokeStyle = "#f3f4f6";
    ctx.lineWidth = 1;

    // Horizontal grid lines
    for (let i = 1; i < 4; i++) {
      const y = padding + (i * (height - padding * 2)) / 4;
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
    }
    ctx.stroke();

    // Draw month labels
    ctx.fillStyle = "#9ca3af";
    ctx.font = "10px Arial";
    ctx.textAlign = "center";

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthWidth = (width - padding * 2) / 11;

    months.forEach((month, i) => {
      const x = padding + i * monthWidth;
      ctx.fillText(month, x, height - 5);
    });

    // Create smooth curves
    const drawCurve = (points: { x: number; y: number }[], color: string) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }

      ctx.stroke();
    };

    // Generate points for both curves
    const greenPoints = Array.from({ length: 12 }, (_, i) => ({
      x: padding + (i * (width - padding * 2)) / 11,
      y: padding + (height - padding * 2) / 2 + Math.sin(i / 1.5) * 30,
    }));

    const yellowPoints = Array.from({ length: 12 }, (_, i) => ({
      x: padding + (i * (width - padding * 2)) / 11,
      y: padding + (height - padding * 2) / 2 + Math.cos(i / 1.5) * 30,
    }));

    drawCurve(greenPoints, "#22c55e");
    drawCurve(yellowPoints, "#eab308");
  }, []);

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs text-gray-500">This Month Revenue</div>
          <div className="text-2xl font-bold text-green-500 mt-1">
            ₹ 1,102,500 /-
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">Last Month</div>
          <div className="text-xs text-blue-500 font-medium">₹ 985K</div>
        </div>
      </div>

      <div className="mt-4 h-[120px]">
        <canvas
          ref={canvasRef}
          width={500}
          height={120}
          className="w-full h-full"
        />
      </div>
    </Card>
  );
}
