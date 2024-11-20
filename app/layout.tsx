// app/layout.tsx

import React from "react";
import type { Metadata } from "next";

// styles Vendors
import "./globals.scss";

// type Components = { [key: string]: React.ComponentType<any> };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
