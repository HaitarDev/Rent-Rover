import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navabar from "@/components/navbar/Navabar";
import Modal from "@/components/modals/Modal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rent Rover",
  description: "RentRover - Find your next home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "h-screen")}>
        <Navabar />
        <Modal />
        <main>{children}</main>
      </body>
    </html>
  );
}
