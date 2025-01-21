"use client";

import CodeContainer from "@/components/layout/code-container";
import PreviewContainer from "@/components/layout/preview-container";

import * as React from "react";
import Link from "next/link";
import logo from "@/public/store.png";
import { Button, buttonVariants } from "@/components/ui/button";
import { Component, File, Home, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const ListItem = React.forwardRef<React.ComponentRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

const navigation = [
  {
    title: "Getting Started",
    icon: Home,
    menu: [
      {
        title: "Introduction",
        description: "Re-usable components built using Radix UI and Tailwind CSS.",
        href: "/docs",
      },
      {
        title: "Installation",
        description: "How to install dependencies and structure your app.",
        href: "/docs/installation",
      },
      {
        title: "Typography",
        description: "Styles for headings, paragraphs, lists...etc",
        href: "/docs/primitives/typography",
      },
    ],
  },
  {
    title: "Components",
    icon: Component,
    menu: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link.",
      },
      {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
      },
      {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      },
    ],
  },
  {
    title: "Documentation",
    icon: File,
    href: "/docs",
  },
];

interface NavigationHeaderProps {
  previewOnly?: boolean;
}

const desktopPreview = (
  <>
    <header className="hidden lg:flex gap-5 items-center sticky top-0 bg-background w-full p-4">
      <Link href="/" className="flex items-center gap-3 text-primary dark:text-primary-foreground">
        <Image src={logo} alt="Delite UI" width={30} height={30} priority />
        <span className="text-lg font-medium">Delite UI</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="hidden lg:flex">
          {navigation.map((nav) => {
            if (!nav.href && !nav.menu) return <></>;
            if (nav.href)
              return (
                <NavigationMenuItem key={nav.title}>
                  <Link href={nav.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{nav.title}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            return (
              <NavigationMenuItem key={nav.title}>
                <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {nav.menu!.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex gap-4 items-center">
        <Button className="rounded-full px-3 py-1" variant="secondary">
          <Search />
        </Button>
        <Button className="rounded-2xl px-10 hidden lg:inline-flex">Login</Button>
      </div>
    </header>
    <div className="p-3 lg:hidden">Open this page on desktop for the preview</div>
  </>
);

const mobilePreview = (
  <header className="flex gap-5 items-center sticky top-0 bg-background w-full p-4">
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button size="icon" variant="secondary" className="inline-flex">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-3/4 rounded-none">
        <DrawerHeader className="flex justify-start gap-3 items-center">
          <Image src={logo} alt="Delite UI" width={30} height={30} priority />
          <DrawerTitle>Delite UI</DrawerTitle>
          <DrawerDescription className="sr-only">Mobile Menu</DrawerDescription>
        </DrawerHeader>
        <nav className="flex flex-col gap-6">
          <Accordion type="multiple">
            {navigation.map((nav) => {
              if (!nav.href && !nav.menu) return <></>;
              if (nav.href)
                return (
                  <Link
                    key={nav.title}
                    href={nav.href}
                    className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start")}
                  >
                    {nav.icon && <nav.icon className="w-4 aspect-square" />}
                    {nav.title}
                  </Link>
                );
              return (
                <AccordionItem value={nav.title} key={nav.title}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      {nav.icon && <nav.icon className="w-4 aspect-square" />}
                      {nav.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6">
                    <ul className="flex flex-col gap-5">
                      {nav.menu!.map((item) => (
                        <li key={item.title} className="pl-4">
                          <>
                            <Link href={item.href}>{item.title}</Link>
                          </>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <Button className="rounded-2xl px-10 mx-auto">Login</Button>
        </nav>
        <DrawerFooter className="text-xs border-t p-4">Copyright &copy; 2024. All rights reserved.</DrawerFooter>
      </DrawerContent>
    </Drawer>
    <Link href="/" className="flex items-center gap-3 text-primary dark:text-primary-foreground">
      <Image src={logo} alt="Delite UI" width={30} height={30} priority />
      <span className="text-lg font-medium">Delite UI</span>
    </Link>
    <div className="ml-auto flex gap-4 items-center">
      <Button className="rounded-full px-3 py-1" variant="secondary">
        <Search />
      </Button>
    </div>
  </header>
);

const componentCode = `"use client";

import * as React from "react";
import Link from "next/link";

import logo from "@/public/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Component, File, Home, Search } from "lucide-react";
import { DesktopMenu } from "@/components/layout/desktop-menu";
import MobileMenu from "@/components/layout/mobile-menu";

const navigation = [
  {
    title: "Getting Started",
    icon: Home,
    menu: [
      {
        title: "Introduction",
        description: "Re-usable components built using Radix UI and Tailwind CSS.",
        href: "/docs",
      },
      {
        title: "Installation",
        description: "How to install dependencies and structure your app.",
        href: "/docs/installation",
      },
      {
        title: "Typography",
        description: "Styles for headings, paragraphs, lists...etc",
        href: "/docs/primitives/typography",
      },
    ],
  },
  {
    title: "Components",
    icon: Component,
    menu: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link.",
      },
      {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
      },
      {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      },
    ],
  },
  {
    title: "Documentation",
    icon: File,
    href: "/docs",
  },
];

export function Header() {
  return (
    <header className="flex gap-5 items-center sticky top-0 bg-background w-full p-4 z-50">
      <MobileMenu logo={logo} navigation={navigation} />
      <Link href="/" className="flex items-center gap-3 text-primary dark:text-primary-foreground">
        <Image src={logo} alt="Delite UI" width={30} height={30} priority />
        <span className="text-lg font-medium">Delite UI</span>
      </Link>
      <DesktopMenu navigation={navigation} />
      <div className="ml-auto flex gap-4 items-center">
        <Button className="rounded-full px-3 py-1" variant="secondary">
          <Search />
        </Button>
        <Button className="rounded-2xl px-10 hidden lg:inline-flex">Login</Button>
      </div>
    </header>
  );
}`;

const dependencies = [
  {
    title: "Install Button",
    link: "https://ui.shadcn.com/docs/components/button",
  },
  {
    title: "Install Navigation",
    link: "https://ui.shadcn.com/docs/components/navigation-menu",
  },
  {
    title: "Install Accordion",
    link: "https://ui.shadcn.com/docs/components/accordion",
  },
  {
    title: "Install Drawer",
    link: "https://ui.shadcn.com/docs/components/drawer",
  },
];

const source = [
  {
    path: "/components/layout/desktop-menu.tsx",
    filename: "desktop-menu.tsx",
    code: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import React from "react";

interface DesktopMenuProps {
  navigation: {
    title: string;
    icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    href?: string;
    menu?: {
      title: string;
      description: string;
      href: string;
    }[];
  }[];
}

export const DesktopMenu = ({ navigation }: DesktopMenuProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden lg:flex">
        {navigation.map((nav) => {
          if (!nav.href && !nav.menu) return <></>;
          if (nav.href)
            return (
              <NavigationMenuItem key={nav.title}>
                <Link href={nav.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{nav.title}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          return (
            <NavigationMenuItem key={nav.title}>
              <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {nav.menu!.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<React.ComponentRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";`,
  },
  {
    path: "/components/layout/mobile-menu.tsx",
    filename: "mobile-menu.tsx",
    code: `import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import Image, { StaticImageData } from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { LucideProps, Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  logo: StaticImageData;
  navigation: {
    title: string;
    icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    href?: string;
    menu?: {
      title: string;
      description: string;
      href: string;
    }[];
  }[];
}

function MobileMenu({ logo, navigation }: MobileMenuProps) {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button size="icon" variant="secondary" className="inline-flex lg:hidden">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-3/4 rounded-none">
        <DrawerHeader className="flex justify-start gap-3 items-center">
          <Image src={logo} alt="Delite UI" width={30} height={30} priority />
          <DrawerTitle>Delite UI</DrawerTitle>
          <DrawerDescription className="sr-only">Mobile Menu</DrawerDescription>
        </DrawerHeader>
        <nav className="flex flex-col gap-6">
          <Accordion type="multiple">
            {navigation.map((nav) => {
              if (!nav.href && !nav.menu) return <></>;
              if (nav.href)
                return (
                  <Link
                    key={nav.title}
                    href={nav.href}
                    className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start")}
                  >
                    {nav.icon && <nav.icon className="w-4 aspect-square" />}
                    {nav.title}
                  </Link>
                );
              return (
                <AccordionItem value={nav.title} key={nav.title}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      {nav.icon && <nav.icon className="w-4 aspect-square" />}
                      {nav.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6">
                    <ul className="flex flex-col gap-5">
                      {nav.menu!.map((item) => (
                        <li key={item.title} className="pl-4">
                          <>
                            <Link href={item.href}>{item.title}</Link>
                          </>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <Button className="rounded-2xl px-10 mx-auto">Login</Button>
        </nav>
        <DrawerFooter className="text-xs border-t p-4">Copyright &copy; 2024. All rights reserved.</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
export default MobileMenu;`,
  },
  {
    path: "/components/ui/accordion.tsx",
    filename: "accordion.tsx",
    code: `"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("bg-background", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-2 text-sm font-medium transition-all px-4 text-left data-[state=open]:hidden",
        className
      )}
      {...props}
    >
      {children}
      <Plus className="h-4 w-4 text-muted-foreground" />
    </AccordionPrimitive.Trigger>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-2 text-sm font-medium transition-all px-4 text-left data-[state=closed]:hidden",
        className
      )}
      {...props}
    >
      {children}
      <Minus className="h-4 w-4 text-muted-foreground" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="bg-muted overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0 p-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };`,
  },
  {
    path: "/components/ui/drawer.tsx",
    filename: "drawer.tsx",
    code: `"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="w-2 h-[100px] rounded-full bg-muted absolute right-4 top-1/2 -translate-y-1/2" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};`,
  },
];

function NavigationHeader({ previewOnly = false }: NavigationHeaderProps) {
  return (
    <div className="space-y-8">
      <PreviewContainer
        title={previewOnly ? "Navigation header" : undefined}
        href="/components/header/navigation-header"
        desktopPreview={desktopPreview}
        mobilePreview={mobilePreview}
        tabletPreview={mobilePreview}
      />
      {!previewOnly && (
        <CodeContainer
          source={source}
          component={{ code: componentCode, filename: "layout.tsx" }}
          dependencies={dependencies}
        />
      )}
    </div>
  );
}
export default NavigationHeader;
