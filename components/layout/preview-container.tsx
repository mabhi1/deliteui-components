"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { ExternalLink, Monitor, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "../ui/code-block";
import Link from "next/link";

interface PreviewContainerProps {
  title: string;
  id: string;
  desktopPreview: React.ReactNode;
  mobilePreview: React.ReactNode;
  tabletPreview: React.ReactNode;
  source: {
    path: string;
    filename: string;
    code: string;
  };
  component: {
    filename: string;
    code: string;
  };
  dependencies?: {
    title: string;
    link: string;
  }[];
}

function PreviewContainer({
  source,
  component,
  id,
  title,
  desktopPreview,
  mobilePreview,
  tabletPreview,
  dependencies,
}: PreviewContainerProps) {
  const [device, setDevice] = useState("desktop");

  return (
    <div className="space-y-8 scroll-mt-20" id={id}>
      <div className="space-y-3">
        <div className="flex justify-between items-end">
          <div className="text-xl font-medium">{title}</div>
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
        <div className="border flex-1 rounded p-5 bg-muted">
          {device === "desktop" && desktopPreview}
          {device === "tablet" && tabletPreview}
          {device === "mobile" && mobilePreview}
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-lg font-medium">Dependencies</div>
        <ul className="flex flex-col">
          {dependencies &&
            dependencies.length > 0 &&
            dependencies.map((dependency) => (
              <li key={dependency.title}>
                <Link className={buttonVariants({ variant: "link" })} href={dependency.link} target="_blank">
                  <ExternalLink />
                  {dependency.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="space-y-3">
        <div className="text-lg font-medium">Usage</div>
        <div>Copy the source code</div>
        <div className="italic bg-muted p-2 px-3 rounded">{source.path}</div>
        <CodeBlock language="tsx" filename={source.filename} code={source.code} />
        <div>Import it in your component</div>
        <CodeBlock language="tsx" filename={component.filename} code={component.code} />
      </div>
    </div>
  );
}
export default PreviewContainer;
