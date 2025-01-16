"use client";

import { pageMenu } from "@/lib/menus";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ComponentsMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex w-44 flex-col gap-5 sticky top-20 h-fit">
      {pageMenu.map((menu) => (
        <div className="flex flex-col" key={menu.title}>
          <div className="font-medium p-2">{menu.title}</div>
          {menu.items.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={cn("capitalize hover:bg-muted p-2 rounded", pathname === item.href && "bg-muted")}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
export default ComponentsMenu;
