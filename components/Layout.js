import React from "react";
import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
// Mobile
import MenuDropdown from "../sections/MobileDropdown";
import MobileFooter from "../sections/MobileFooter";

const Layout = ({ children }) => {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Lead</title>
        <meta
          name="description"
          content="Lead: A super solution for your business"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Lead Generator Tool"
        />
        <meta
          property="og:description"
          content="Market and Sales Automation"
        />

        <link rel="shortcut icon" href="images/leadIcon2.png" />
      </Head>

      {/* Header, Main & Footer */}
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Mobile Visibility */}
        <MenuDropdown />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileFooter />
      </div>
    </>
  );
};
export default Layout;