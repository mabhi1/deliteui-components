import PageSideMenu from "@/components/layout/page-side-menu";
import { buttonExamples } from "@/components/pages/button/button-examples";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Button - Delite UI",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PageSideMenu examples={buttonExamples} component="button" />
    </>
  );
}
