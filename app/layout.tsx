// app/layout.tsx

import React from "react";
import type { Metadata } from "next";
import { GContextProvider } from "./contextApi/contextApi";

import { LayoutProps } from "./types"; // Adjust the import based on your file structure

// styles Vendors
import "./globals.scss";
import "locomotive-scroll/dist/locomotive-scroll";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  components, // Ensure components is included
}: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200 "
        />
      </head>
      <body>
        <GContextProvider>{children}</GContextProvider>
      </body>
    </html>
  );
}