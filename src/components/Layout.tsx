// src/components/Layout.tsx
import type { ReactNode } from "react";
import Header from "./Header/Header";
import "./Layout.scss";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
