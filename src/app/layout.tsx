import React from "react";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header className={inter.className} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
