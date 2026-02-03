"use client";

import { useEffect, useRef } from "react";
import QRCodeLib from "qrcode";
import { cn } from "@/lib/utils";

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
}

export function QRCode({ value, size = 200, className }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    QRCodeLib.toCanvas(canvasRef.current, value, {
      width: size,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    }).catch((err) => {
      console.error("Error generating QR code:", err);
    });
  }, [value, size]);

  return (
    <div className={cn("inline-block p-4 bg-white rounded-lg", className)}>
      <canvas ref={canvasRef} width={size} height={size} />
      <p className="text-xs text-center mt-2 text-muted-foreground">
        Escaneie para se inscrever
      </p>
    </div>
  );
}
