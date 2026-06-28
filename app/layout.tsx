import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KudiStocks — Smarter Inventory, Smarter Finance",
  description:
    "KudiStocks helps businesses track inventory, record sales and purchases, and gain real-time insights with flexible language options.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
