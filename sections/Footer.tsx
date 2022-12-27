import React from "react";
import Link from "next/link";
// Icons
import { GrFacebook } from "@react-icons/all-files/gr/GrFacebook"
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter"
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram"

const Footer = () => {
  return (
    <footer className="flex justify-between px-4 py-4 md:py-6 font-Montserrat">

      {/* Title */}
      <div>
        <Link rel="noopener noreferrer" href="/">
          <h1 className="text-3xl font-extrabold dark:text-orange-500 font-Montserrat">
            lead
          </h1>
        </Link>
      </div>


      {/* Copyright */}
      <div className="mt-1">
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
      <div>
        <div className="flex gap-8">
          <GrFacebook size={24} />
          <GrTwitter size={24} />
          <GrInstagram size={24}/>
        </div>
      </div>

    </footer>
  );
};

export default Footer;