import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
// Icons
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { AiOutlineOrderedList } from "@react-icons/all-files/ai/AiOutlineOrderedList";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { RiFileHistoryLine } from "@react-icons/all-files/ri/RiFileHistoryLine";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

// FramerMotion
import { motion } from "framer-motion"
// NextAuth
import { useSession, signIn, signOut } from "next-auth/react"
import LoginMobile from "../components/LoginMobile";


const MenuDropdown = () => {
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
        <Button
          className="flex gap-1"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <span className="">Light/Dark Mode</span>
        </Button>
      );
    } else {
      return (
        <Button
          className="flex gap-1"
          onClick={() => setTheme("light")}
        >
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
          <span className="">Light/Dark Mode</span>
        </Button>
      );
    }
  };

  return (
    // Mobile Visibility
    <div className="px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
        }}
        className="flex justify-between mt-4 text-right md:mt-6 lg:hidden top-16 md:w-full md:mx-2">
        <Link rel="noopener noreferrer" href="/">
          <div className="flex">
            {/* Image */}
            <Image
              src="/images/leadIcon2.png"
              width={35}
              height={35}
              alt="jLogo"
              className=""
            />
            <div className="flex">
              <h1 className="ml-3 text-4xl font-extrabold dark:text-orange-500 font-Montserrat">
                lead
              </h1>
            </div>
          </div>
        </Link>


        {/* Dark Mode and Toggle */}
        <div className="z-10 flex">
          {/* Tablet Beta Access */}
          <button className="hidden px-4 py-2 mr-4 font-semibold bg-transparent border rounded md:block border-neutral-400 dark:border-neutral-600 hover:bg-orange-500 hover:text-white hover:border-transparent font-Montserrat">
            Request Beta Access
          </button>
          <Menu as="div" className="relative inline-block text-left">
            {/* Toggle Button */}
            <div>
              <Menu.Button className="inline-flex justify-center w-full py-2 text-sm font-medium rounded-md text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <GiHamburgerMenu
                  className="w-6 h-6 dark:text-white"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {/* Home */}
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/">
                        <button
                          className={`${active
                            ? "bg-violet-500 text-white"
                            : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                        >
                          <FaHome size={17} />
                          <span className="ml-2">Home</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  {/* Categories */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/digital-marketing-services">
                        <button
                          className={`${active
                            ? "bg-violet-500 text-white"
                            : "text-gray-900"
                            } group flex items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                        >
                          <AiOutlineOrderedList size={17} />
                          <span className="ml-2">Digital Services</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                {/* Create a New Section */}
                {/* How To Buy */}
                <div className="px-1 py-1 pb-2">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/why-lead">
                        <button
                          className={`${active
                            ? "bg-violet-500 text-white"
                            : "text-gray-900"
                            } group flex items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                        >
                          <AiOutlineQuestionCircle size={17} />
                          <span className="ml-2">Why Lead</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  {/* About */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/get-a-quote">
                        <button
                          className={`${active
                            ? "bg-violet-500 text-white"
                            : "text-gray-900"
                            } group flex items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                        >
                          <RiFileHistoryLine size={17} />
                          <span className="ml-2">Get A Quote</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>

                {/* Contact */}
                <div className="px-1 py-1 pb-2">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/contact"
                      >
                        <button
                          className={`${active
                            ? "bg-violet-500 text-white"
                            : "text-gray-900"
                            } group flex items-center rounded-md px-2 py-1 text-sm font-Poppins`}
                        >
                          <AiOutlineMail size={17} />
                          <span className="ml-2">Contact</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>

                {/* Contact */}
                <div className="px-1 py-1 pb-2">
                  {/* Profile */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/profile">
                        {/* Login */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            signIn('google');
                          }}
                          className='flex items-center px-2 py-2 text-sm text-gray-900 rounded-md group font-Poppins'
                        >
                          <LoginMobile />
                        </button>
                      </Link>
                    )}
                  </Menu.Item>

                  {/* Logout */}
                  <Menu.Item>
                    {/* Logout */}
                    {({ active }) => (
                      <button
                        className={`${active
                          ? "bg-blue-500 text-white"
                          : "text-gray-900"
                          } group flex items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                        onClick={(() => signOut())}
                      >
                        <ArrowLeftOnRectangleIcon className="w-6" />
                        <span className="ml-2 font-medium font-OpenSans">Logout</span>
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? "bg-violet-500 text-white" : "text-gray-900"
                          } group flex items-center rounded-md py-1 text-sm font-Poppins`}
                      >
                        {renderThemeChanger()}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuDropdown;