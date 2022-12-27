import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between px-4 py-4 md:py-6">
      
      {/* Title */}
      <div>
        <Link rel="noopener noreferrer" href="/">
          <h1 className="mt-1 text-3xl font-extrabold dark:text-orange-500 font-Montserrat">
            lead
          </h1>
        </Link>
      </div>


      {/* Copyright */}
      <div className="mt-4">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/johncanero/"
        >
          <span className="mr-2 font-bold text-gray-900 dark:text-orange-500">
            John Cañero
          </span>
        </Link>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>

      {/* Icons */}

    </footer>
  );
};

export default Footer;