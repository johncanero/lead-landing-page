import React from "react";
import Link from "next/link";
// Icons
import { GrFacebook } from "@react-icons/all-files/gr/GrFacebook" 
import { GrTwitter } from  "@react-icons/all-files/gr/GrTwitter"
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram"

const Footer = () => {
  return (
    <footer className="hidden py-10 md:mb-0 md:mx-2 md:py-16 md:justify-between md:flex font-Montserrat">

      {/* Title */}
      <div>
        <Link rel="noopener noreferrer" href="/">
          <h1 className="hidden text-3xl font-extrabold dark:text-orange-500 font-Montserrat md:block">
            lead
          </h1>
        </Link>
      </div>


      {/* Copyright */}
      <div className="mt-4 text-center md:mt-1">
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
      <div className="mt-6 md:mt-1">
        <div className="flex justify-center gap-8">
          <GrFacebook size={24} />
          <GrTwitter size={24} />
          <GrInstagram size={24}/>
        </div>
      </div>

    </footer>
  );
};

export default Footer;