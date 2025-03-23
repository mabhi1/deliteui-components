"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface PreviewContainerProps {
  title?: string;
  desktopPreview: React.ReactNode;
  mobilePreview: React.ReactNode;
  tabletPreview: React.ReactNode;
  href: string;
}

function PreviewContainer({ title, href, desktopPreview, mobilePreview, tabletPreview }: PreviewContainerProps) {
  const [device, setDevice] = useState("desktop");

  return (
    <div className="space-y-3">
      <div className={cn("flex items-end gap-2", title ? "justify-between" : "justify-end")}>
        {title && (
          <Link href={href} className="text-lg font-medium truncate">
            {title}
          </Link>
        )}
        <div className="flex gap-1">
          <Button variant={device === "desktop" ? "default" : "secondary"} onClick={() => setDevice("desktop")}>
            <Monitor className="w-4 aspect-square" />
          </Button>
          <Button variant={device === "tablet" ? "default" : "secondary"} onClick={() => setDevice("tablet")}>
            <Tablet className="w-4 aspect-square" />
          </Button>
          <Button variant={device === "mobile" ? "default" : "secondary"} onClick={() => setDevice("mobile")}>
            <Smartphone className="w-4 aspect-square" />
          </Button>
        </div>
      </div>
      <div className="border flex-1 rounded p-5 bg-muted overflow-hidden">
        {device === "desktop" && desktopPreview}
        {device === "tablet" && tabletPreview}
        {device === "mobile" && mobilePreview}
      </div>
    </div>
  );
}
export default PreviewContainer;
