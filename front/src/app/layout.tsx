import "./globals.css";
import { StrictMode } from "react";
import { Mulish } from "next/font/google";

import { ClientProvider } from "@/app/client";
import type { Metadata } from "next";
import Notification from "@/components/Notification";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whombat",
  description: "Audio annotation tool for machine learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StrictMode>
      <html lang="en">
        <body
          className={`${mulish.className} font-sans bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 min-h-screen w-screen overflow-x-hidden`}
        >
          <ClientProvider>
            {children}
            <Notification />
          </ClientProvider>
        </body>
      </html>
    </StrictMode>
  );
}
