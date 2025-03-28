import PageSideMenu from "@/components/layout/page-side-menu";
import { headerExamples } from "@/components/pages/header/header-examples";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Header - Delite UI",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PageSideMenu examples={headerExamples} component="header" />
    </>
  );
}
