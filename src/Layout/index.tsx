import { ReactNode } from "react";
import { Footer } from "../components/Footer";
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
      <Footer />
    </>
  )
}