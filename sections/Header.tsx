import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Button from "../components/Button";
// Icons
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "light") {
      return (
        <Button className=" text-neutral-900" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="text-green-400" onClick={() => setTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    }
  };

  return (
    <div>
      <div className="hidden pt-3 mx-2 lg:block">
        <header className="flex items-center justify-between h-16 mt-1 md:mt-3 font-ShareTechMono">
          {/* Justify Between: Left */}
          <div className="flex">
            {/* Heading Title Link */}
            <div className="flex">
              <Link rel="noopener noreferrer" href="/">
                <Image
                  src="/images/techStore.png"
                  width={50}
                  height={45}
                  alt="aLogo"
                  className=""
                />
              </Link>
              <Link rel="noopener noreferrer" href="/">
                {/* Heading Title: Tech Jam */}
                <h1 className="mt-1 ml-6 text-4xl font-black dark:text-green-400 font-Roboto">
                  Tech Jam
                </h1>
              </Link>
            </div>

            <ul className="flex gap-12 mt-2 text-sm ml-14 lg:text-lg">
              {/* Header Links */}
              <Link
                rel="noopener noreferrer"
                href="/"
                className="mt-1 font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Home
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/categories"
                className="mt-1 font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Categories
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/howtobuy"
                className="mt-1 font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                How To Buy
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/about"
                className="mt-1 font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                About
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/contact"
                className="mt-1 font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Contact
              </Link>

              {/* <Link
                rel="noopener noreferrer"
                href="/"
                className="mt-1 text-lg font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-30"
              >
                Warranty
              </Link> */}
            </ul>
          </div>

          <div className="flex">
            <button>
              <AiOutlineShoppingCart size={34} className="mr-6" />
            </button>

            <button>
              <CgProfile size={34} className="mr-6" />
            </button>
            {renderThemeChanger()}
          </div>
        </header>
        <hr className="h-px mt-8 border-0 bg-neutral-200 dark:bg-neutral-700"></hr>
      </div>
    </div>
  );
};

export default Header;