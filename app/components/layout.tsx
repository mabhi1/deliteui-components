import ComponentsMenu from "@/components/layout/components-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components - Delite UI",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex md:py-5 lg:py-10">
      <ComponentsMenu />
      {children}
    </div>
  );
}
