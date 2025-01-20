import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navigation Header - Delite UI",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
