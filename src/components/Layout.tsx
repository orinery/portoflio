// src/components/Layout.tsx
import type { ReactNode } from "react";
// import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import "./Layout.scss";

export default function Layout({ children }: { children: ReactNode }) {
  // const { pathname } = useLocation();
  // const isIntro = pathname === "/";

  return (
    <>
      {/* {!isIntro && <Header />} */}
      <Header />
      <main>{children}</main>
    </>
  );
}
