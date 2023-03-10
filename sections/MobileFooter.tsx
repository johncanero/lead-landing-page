import React from "react";
import Link from "next/link";
// Icons
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { HiOutlineArrowsExpand } from "@react-icons/all-files/hi/HiOutlineArrowsExpand"
import { RiQuestionAnswerLine } from "@react-icons/all-files/ri/RiQuestionAnswerLine"
import { GiNetworkBars } from "@react-icons/all-files/gi/GiNetworkBars"
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";

const MobileFooter = () => {
    return (
        <footer>
            <div className="fixed bottom-0 left-0 flex justify-center w-full gap-8 py-2 mx-auto text-center border shadow-md bg-zinc-50 dark:bg-neutral-800 dark:bg-black50 md:hidden dark:border-neutral-600">
                {/* Home */}
                <Link href="/" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <FaHome className="ml-2" size={21} />
                        <p className="mt-1 text-xs text-center font-Poppins">Home</p>
                    </button>
                </Link>

                {/* Features */}
                <Link href="/why-lead" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <HiOutlineArrowsExpand className="ml-5" size={22} />
                        <p className="mt-1 text-xs text-center font-Poppins">Why Lead</p>
                    </button>
                </Link>

                {/* About */}
                <Link href="/get-a-quote" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <RiQuestionAnswerLine className="ml-2" size={23} />
                        <p className="mt-1 text-xs text-center font-Poppins">Quote</p>
                    </button>
                </Link>



                {/* Contact*/}
                <Link href="/contact" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <BsEnvelope className="ml-3" size={22} />
                        <p className="mt-1 text-xs text-center font-Poppins">Contact</p>
                    </button>
                </Link>

                {/* Careers */}
                <Link href="/digital-marketing-services" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <GiNetworkBars className="ml-3" size={22} />
                        <p className="mt-1 text-xs text-center font-Poppins">Services</p>
                    </button>
                </Link>

            </div>
        </footer>
    );
};

export default MobileFooter;