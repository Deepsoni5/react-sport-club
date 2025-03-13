"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

export function GroundRegisterCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const padding = 5;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Sample data points - create a zigzag pattern like in the image
    const data = [40, 60, 45, 70, 55, 80, 65, 90, 75, 95, 85, 100];
    const points = data.map((value, index) => ({
      x: padding + ((width - padding * 2) * index) / (data.length - 1),
      y: height - padding - (value / 100) * (height - padding * 2),
    }));

    // Draw line
    ctx.beginPath();
    ctx.strokeStyle = "#22c55e";
    ctx.lineWidth = 2;
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();

    // Draw points
    points.forEach((point) => {
      ctx.beginPath();
      ctx.fillStyle = "#22c55e";
      ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }, []);

  return (
    <Card className="p-4">
      <div className="text-xs text-gray-500">This Month</div>
      <div className="mt-1">
        <div className="text-sm font-medium">Ground Register</div>
        <div className="text-3xl font-bold mt-1">1568</div>
      </div>
      <div className="mt-4 h-[60px]">
        <canvas
          ref={canvasRef}
          width={200}
          height={60}
          className="w-full h-full"
        />
      </div>
    </Card>
  );
}
