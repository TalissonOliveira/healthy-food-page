import { ReactNode } from "react";
import { Header } from "../components/Header";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />

      <main>
        { children }
      </main>
    </>
  )
}