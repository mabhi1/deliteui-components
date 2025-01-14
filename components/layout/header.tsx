import { Component, FolderGit2, Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const mainMenu = [
  {
    title: "Components",
    href: "/components",
    icon: Component,
  },
  {
    title: "Github",
    href: "https://github.com/mabhi1/deliteui-components.git",
    icon: FolderGit2,
  },
];

function Header() {
  return (
    <header className="border-b p-3 text-sm">
      <div className="hidden md:flex items-center gap-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Delite UI" width={30} height={30} />
          <span className="text-lg font-medium">Delite UI</span>
        </div>
        <div className="flex items-center gap-5">
          {mainMenu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex gap-1 items-center text-foreground/75 hover:text-foreground"
            >
              <item.icon className="w-4 aspect-square" />
              {item.title}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Button variant="secondary" className="text-xs text-muted-foreground w-60 flex items-center gap-3">
            <Search className="w-4 aspect-square" />
            <span>Search Components &#8984;K</span>
          </Button>
          <ModeToggle />
        </div>
      </div>
      <div className="flex md:hidden items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-4 aspect-square" />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-2 gap-5 flex flex-col" side="left">
            <SheetHeader className="flex-row gap-3 items-center space-y-0">
              <SheetClose asChild>
                <Button variant="outline" size="icon">
                  <Menu className="w-[1.2rem] h-[1.2rem]" />
                </Button>
              </SheetClose>
              <SheetTitle className="text-xl font-medium flex gap-2">
                <SheetClose asChild>
                  <Link href="/">Delite UI</Link>
                </SheetClose>
              </SheetTitle>
              <SheetDescription className="hidden">Delite ui mobile menu</SheetDescription>
            </SheetHeader>
            <ul className="flex gap-2 flex-col ml-2 text-sm">
              {mainMenu.map((item) => (
                <li key={item.title} className="flex items-center gap-2">
                  <item.icon className="w-4 aspect-square" />
                  <SheetClose asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <Separator />
          </SheetContent>
        </Sheet>
        <div>
          <Image src="/logo.png" alt="Delite UI" width={28} height={28} />
        </div>
        <Button variant="secondary" className="text-xs text-muted-foreground flex items-center gap-3 flex-1">
          <Search className="w-4 aspect-square" />
          <span>Search &#8984;K</span>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
export default Header;
