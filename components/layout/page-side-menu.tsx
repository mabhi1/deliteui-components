"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type PageSideMenuProps = {
  examples?: {
    name: string;
    id: string;
  }[];
};

function PageSideMenu({ examples }: PageSideMenuProps) {
  const [activeId, setActiveId] = useState("about");

  const handleScroll = () => {
    if (!examples) return;
    const sections = ["about", ...examples.map((item) => item.id)];
    let currentId = "";
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        console.log(section, rect.top, rect.bottom, window.innerHeight / 2);
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          currentId = section;
          break;
        }
      }
    }

    setActiveId(currentId);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex flex-col gap-3 min-w-52 sticky top-20 h-fit">
      <div className="font-medium">On this page</div>
      <div className="text-muted-foreground flex flex-col gap-3">
        <Link href="#about" className={cn("hover:text-primary font-medium", activeId === "about" && "text-primary")}>
          About
        </Link>
        {examples && (
          <>
            <div className="font-medium">Examples</div>
            <ul className="space-y-3">
              {examples.map((item) => (
                <li
                  key={item.name}
                  className={cn(
                    "capitalize hover:text-primary hover:border-primary border-l-2 pl-4 font-medium",
                    activeId === item.id && "text-primary border-primary"
                  )}
                >
                  <Link href={`#${item.id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
export default PageSideMenu;
