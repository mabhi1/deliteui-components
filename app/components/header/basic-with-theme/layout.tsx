import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic With Theme - Delite UI",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
