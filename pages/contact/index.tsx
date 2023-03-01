import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { IoMdCall } from "@react-icons/all-files/io/IoMdCall";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";
// Icons
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
// Motion
import { motion } from "framer-motion";

const contact = () => {

  return (
    <div>
      <div className="container flex justify-center mx-auto mt-8 md:px-6">
        <section className="mb-32 text-gray-800">
          {/* Background Image */}
          <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-t-2xl">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500">
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>

          {/* Get in Touch and Forms */}
          <div className="relative flex justify-center border dark:border-neutral-600 md:px-3 lg:px-6 items-top rounded-b-3xl dark:bg-black50 sm:items-center font-Poppins">
            <div className="mx-auto md:max-w-5xl sm:px-3 lg:px-6">
              <div className="mt-3 md:mt-8 md:overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-3 mb-8 mr-2 md:px-3 lg:px-10 md:py-0 sm:rounded-lg">
                    <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-800 md:text-left dark:text-white">
                      Get in touch
                    </h1>
                    <p className="mt-4 text-base font-medium text-gray-600 md:mt-3 md:text-lg md:text-left text-normal dark:text-gray-400">
                      Fill in the form to start a conversation
                    </p>

                    {/* Location */}
                    <div className="flex items-center mt-5 text-gray-600 dark:text-gray-400">
                      <GoLocation size={20} />
                      <div className="ml-4 font-semibold tracking-wide w-72 text-md">
                        Manila, Philippines
                      </div>
                    </div>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                      <IoMdCall size={20} />
                      <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                        +63 ----------
                      </div>
                    </div>

                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                      <BsEnvelope size={20} />
                      <div className="w-40 ml-4 text-xs font-semibold tracking-wide break-normal md:text-xs">
                        leaddigital@email.com
                      </div>
                    </div>

                    <motion.div
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.75,
                      }}>
                      <div className="flex justify-center mt-6 md:justify-start">
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/johncanero/"
                        >
                          <FaLinkedin
                            className="mr-5 transition duration-300 ease-in-out dark:text-gray-100 hover:dark:text-cyan-500 hover:-translate-y-1 hover:scale-110"
                            size={30}
                          />
                        </Link>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=johncanero.official@gmail.com"
                        >
                          <HiOutlineMail
                            className="mr-5 transition duration-300 ease-in-out dark:text-gray-100 hover:dark:text-cyan-500 hover:-translate-y-1 hover:scale-110"
                            size={32}
                          />
                        </Link>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/johncanero"
                        >
                          <FaGithub
                            className="mr-5 transition duration-300 ease-in-out dark:text-gray-100 hover:dark:text-cyan-500 hover:-translate-y-1 hover:scale-110 animate__animated animate__fadeIn"
                            size={30}
                          />
                        </Link>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/johncaneroo"
                        >
                          <FaTwitter
                            className="mr-5 transition duration-300 ease-in-out dark:text-gray-100 hover:dark:text-cyan-500 hover:-translate-y-1 hover:scale-110"
                            size={30}
                          />
                        </Link>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/johncanero/"
                        >
                          <FaInstagram
                            className="mr-0 transition duration-300 ease-in-out dark:text-gray-100 hover:dark:text-cyan-500 hover:-translate-y-1 hover:scale-110"
                            size={30}
                          />
                        </Link>
                      </div>
                    </motion.div>
                  </div>

                  {/* Form and Input */}
                  <form className="flex flex-col md:mx-3 lg:mx-0 font-Poppins">
                    {/* Name */}
                    <h2 className="font-bold dark:text-white">Your Name</h2>
                    <div className="flex flex-col">
                      <label htmlFor="name" className="hidden">
                        Full Name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        className="px-3 py-3 mx-auto mt-2 text-gray-800 bg-white border-2 border-gray-400 rounded-lg  md:mx-0 lg:w-11/12 md:w-56 w-72 dark:bg-black60 dark:border-neutral-400 focus:border-gray-800 focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col mt-2">
                      <h2 className="font-bold dark:text-white">
                        Email Address
                      </h2>
                      <label htmlFor="email" className="hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="px-3 py-3 mx-auto mt-2 text-gray-800 bg-white border-2 border-gray-400 rounded-lg md:mx-0 lg:w-11/12 md:w-56 w-72 dark:bg-black60 dark:border-neutral-400 focus:border-gray-800 focus:outline-none"
                      />
                    </div>

                    <div className="mb-6 form-group">
                      <h2 className="mt-2 font-bold dark:text-white">
                        Your Message
                      </h2>
                      <textarea
                        className="block mt-2 text-gray-800 transition ease-in-out bg-white border-2 rounded form-control lg:w-11/12 px-3 py-3 md:w-56 w-72 h-52 bg-clip-padding font-Poppins dark:bg-black60 dark:border-neutral-400 focus:outline-none"
                        id="exampleFormControlTextarea13"
                        placeholder="Forward the message to GMAIL or LinkedIn"
                      ></textarea>
                    </div>
                    <div className="flex mb-6 text-center form-group form-check">
                      <input
                        className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-orange-500 checked:border-orange-600 focus:outline-none"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="inline-block text-sm text-gray-800 md:text-base dark:text-gray-400 form-check-label"
                        htmlFor="exampleCheck87"
                      >
                        Send me a copy of this message
                      </label>
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      className="px-6 py-3 mb-6 font-bold text-center text-white transition duration-300 ease-in-out bg-gray-900 rounded-lg dark:text-gray-800 hover:dark:text-white dark:bg-gray-100 md:w-32 hover:bg-neutral-800 dark:hover:bg-neutral-600"
                    >
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=johncanero.official@gmail.com"
                      >
                        Submit
                      </Link>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default contact;