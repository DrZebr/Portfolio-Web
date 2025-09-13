import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar"; // ✅ Correct casing

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and Tailwind/DaisyUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <NavBar />

        {/* Page content */}
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
