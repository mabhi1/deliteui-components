import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { mainMenu, pageMenu } from "@/lib/menus";
import logo from "@/public/logo.png";
import logoDark from "@/public/logo-dark.png";

function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-md bg-background/50 border-b text-sm z-50">
      <div className="hidden md:flex items-center gap-8 max-w-[85rem] mx-auto p-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Delite UI" width={30} height={30} priority className="dark:hidden" />
          <Image src={logoDark} alt="Delite UI" width={30} height={30} priority className="hidden dark:block" />
          <span className="text-lg font-medium">Delite UI</span>
        </Link>
        <ul className="flex items-center gap-5">
          {mainMenu.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="flex gap-1 items-center text-foreground/75 hover:text-foreground">
                <item.icon className="w-4 aspect-square" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-3">
          <Button variant="secondary" className="text-xs text-muted-foreground w-60 flex items-center gap-3">
            <Search className="w-4 aspect-square" />
            <span>Search Components &#8984;K</span>
          </Button>
          <ModeToggle />
        </div>
      </div>
      <div className="flex md:hidden items-center gap-3 p-3">
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
            <div className="flex-1 space-y-3">
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
              <div className="space-y-5">
                {pageMenu.map((menu) => (
                  <div key={menu.title} className="flex gap-3 flex-col ml-2">
                    <div className="font-medium flex items-center gap-2">{menu.title}</div>
                    <ul className="flex gap-3 flex-col">
                      {menu.items.map((item) => (
                        <li
                          key={item.title}
                          className="flex items-center gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                        >
                          <SheetClose asChild>
                            <Link href={item.href}>{item.title}</Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <SheetFooter className="text-xs p-2 border-t">Code available on github.</SheetFooter>
          </SheetContent>
        </Sheet>
        <div>
          <Image src={logo} alt="Delite UI" width={28} height={28} priority className="dark:hidden" />
          <Image src={logoDark} alt="Delite UI" width={28} height={28} priority className="hidden dark:block" />
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
