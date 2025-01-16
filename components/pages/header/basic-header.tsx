import Link from "next/link";
import Image from "next/image";
import { mainMenu, pageMenu } from "@/lib/menus";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import PreviewContainer from "@/components/layout/preview-container";
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
import { Separator } from "@/components/ui/separator";
import logo from "@/public/logo.png";
import logoDark from "@/public/logo-dark.png";

const mobilePreview = (
  <header className="border-b p-3 text-sm max-w-[360px] mx-auto bg-background">
    <div className="flex items-center gap-3">
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
      <div className="flex items-center gap-2 mr-auto">
        <Image src={logo} alt="Delite UI" width={28} height={28} priority className="dark:hidden" />
        <Image src={logoDark} alt="Delite UI" width={28} height={28} priority className="hidden dark:block" />
        <span className="text-lg font-medium">Delite UI</span>
      </div>
      <ModeToggle />
    </div>
  </header>
);

const desktopPreview = (
  <>
    <header className="hidden md:block border-b p-3 text-sm bg-background">
      <div className="flex items-center gap-8 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Delite UI" width={30} height={30} priority className="dark:hidden" />
          <Image src={logoDark} alt="Delite UI" width={30} height={30} priority className="hidden dark:block" />
          <span className="text-lg font-medium">Delite UI</span>
        </Link>
        <ul className="flex items-center gap-5 mr-auto">
          {mainMenu.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="flex gap-1 items-center text-foreground/75 hover:text-foreground">
                <item.icon className="w-4 aspect-square" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </header>
    <div className="p-3 md:hidden">Open this page on desktop for the preview</div>
  </>
);

const sourceCode = `import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { LucideProps, Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
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
import { Separator } from "@/components/ui/separator";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface HeaderProps {
  title: string;
  mobileFooter: string;
  logo: {
    light: StaticImageData;
    dark: StaticImageData;
  };
  rootPath: string;
  mobileMenu?: {
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  }[];
  mainMenu: {
    title: string;
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  }[];
}

function Header({ mobileMenu, mainMenu, rootPath, logo, title, mobileFooter }: HeaderProps) {
  return (
    <header className="border-b p-3 bg-background w-full">
      <div className="hidden md:flex items-center gap-8 max-w-7xl mx-auto">
        <Link href={rootPath} className="flex items-center gap-2">
          <Image src={logo.light} alt={title} width={30} height={30} priority className="dark:hidden" />
          <Image src={logo.dark} alt={title} width={30} height={30} priority className="hidden dark:block" />
          <span className="text-lg font-medium">{title}</span>
        </Link>
        <ul className="flex items-center gap-5 mr-auto">
          {mainMenu.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="flex gap-1 items-center text-foreground/75 hover:text-foreground">
                <item.icon className="w-4 aspect-square" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
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
                  <Link href="/">{title}</Link>
                </SheetClose>
              </SheetTitle>
              <SheetDescription className="hidden">Mobile menu</SheetDescription>
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
              {mobileMenu && mobileMenu.length > 0 && (
                <div className="space-y-5">
                  {mobileMenu.map((menu) => (
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
              )}
            </div>
            <SheetFooter className="text-xs p-2 border-t">{mobileFooter}</SheetFooter>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2 mr-auto">
          <Image src={logo.light} alt={title} width={28} height={28} priority className="dark:hidden" />
          <Image src={logo.dark} alt={title} width={28} height={28} priority className="hidden dark:block" />
          <span className="text-lg font-medium">{title}</span>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
export default Header;
`;

const componentCode = `import Header from "./header";
import logo from "@/public/logo.png";
import logoDark from "@/public/logo-dark.png";

import { Component, FolderGit2 } from "lucide-react";

const mobileMenu = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Theming",
        href: "/docs/theming",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Button",
        href: "/components/button",
      },
    ],
  },
];

const mainMenu = [
  {
    title: "Components",
    href: "/components",
    icon: Component,
  },
  {
    title: "Github",
    href: "https://github.com/",
    icon: FolderGit2,
  },
];

function Layout() {
  return (
    <Header
      title="Delite UI"
      rootPath="/"
      mobileFooter="Code available on github."
      logo={{ dark: logoDark, light: logo }}
      mainMenu={mainMenu}
      mobileMenu={mobileMenu}
    />
  );
}
export default Layout;
`;

const dependencies = [
  {
    title: "Install next-themes and add a mode toggle",
    link: "https://ui.shadcn.com/docs/dark-mode/next",
  },
  {
    title: "Install Button",
    link: "https://ui.shadcn.com/docs/components/button",
  },
  {
    title: "Install Sheet",
    link: "https://ui.shadcn.com/docs/components/sheet",
  },
  {
    title: "Install Separator",
    link: "https://ui.shadcn.com/docs/components/separator",
  },
];

const BasicHeader = () => {
  return (
    <PreviewContainer
      id="basicHeader"
      title="Basic Header"
      desktopPreview={desktopPreview}
      mobilePreview={mobilePreview}
      tabletPreview={desktopPreview}
      source={{ code: sourceCode, path: "/components/ui/header.tsx", filename: "header.tsx" }}
      component={{ code: componentCode, filename: "layout.tsx" }}
      dependencies={dependencies}
    />
  );
};
export default BasicHeader;
