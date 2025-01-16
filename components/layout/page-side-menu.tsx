"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PageSideMenuProps = {
  examples?: {
    name: string;
    id: string;
  }[];
  component: string;
};

function PageSideMenu({ examples, component }: PageSideMenuProps) {
  const pathname = usePathname().split("/");
  const activeId = pathname[pathname.length - 1];

  return (
    <div className="hidden lg:flex flex-col gap-3 min-w-52 sticky top-20 h-fit">
      <div className="font-medium capitalize">{`${component} component`}</div>
      <div className="text-muted-foreground flex flex-col gap-3">
        <Link
          href={`/components/${component}`}
          className={cn("hover:text-primary font-medium", activeId === component && "text-primary")}
        >
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
                    "hover:text-primary hover:border-primary border-l-2 pl-4 font-medium",
                    activeId === item.id && "text-primary border-primary"
                  )}
                >
                  <Link href={`/components/${component}/${item.id}`}>{item.name}</Link>
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
