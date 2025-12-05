import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MPX Labs – Adaptive KI-Systeme für die Industrie",
  description:
    "MPX Labs entwickelt KI-gestützte industrielle Software, Automatisierungslösungen und datengetriebene Systeme.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-mpx-black text-mpx-white">
        {children}
      </body>
    </html>
  );
}
