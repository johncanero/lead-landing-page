import React from "react";
import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
// Mobile
import MenuDropdown from "../sections/MenuDropdown";

const Layout = ({ children }) => {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Tech Jam</title>
        <meta
          name="description"
          content="Tech Jam (Technology, Products and Marketplace)"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Tech Jam (Technology, Products and Marketplace)"
        />
        <meta
          property="og:description"
          content="Technology, Marketplace, Products, Innovation, Advices, Tips"
        />
        {/* Flaticon */}
        <link rel="shortcut icon" href="/images/techStore.png" />
      </Head>

      {/* Header, Main & Footer */}
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Mobile Visibility */}
        <MenuDropdown />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* <MobileFooterButtons /> */}
      </div>
    </>
  );
};
export default Layout;