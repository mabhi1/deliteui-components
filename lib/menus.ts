import { Component, FolderGit2 } from "lucide-react";

const pageMenu = [
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
      {
        title: "Header",
        href: "/components/header",
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
    href: "https://github.com/mabhi1/deliteui-components.git",
    icon: FolderGit2,
  },
];

export { pageMenu, mainMenu };
