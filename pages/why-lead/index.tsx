import React from "react";
import Link from "next/link";
import Image from "next/image";
// Framer-Motion
import { motion } from "framer-motion"

const index = () => {
  return (
    <div className="mb-32 md:mb-0 lg:px-32">
      <h1 className="mt-6 mb-3 text-2xl font-bold text-center text-neutral-600 md:text-2xl font-Montserrat dark:text-neutral-300">
        Why Lead
      </h1>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.4,
        }}
        className='flex justify-center mt-4'>
        <div className='hidden lg:block'>
          <Image
            width={650}
            height={450}
            className="w-full h-full rounded-3xl"
            src="/images/whylead/whyLead4Compressed.jpg"
            alt="Why Lead Feature"
          />
        </div>
      </motion.div>


      {/* Tablet & Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
        }}
        className='flex justify-center'>
        <div className='lg:hidden w-80 md:w-auto '>
          <Image
            width={500}
            height={300}
            className="rounded-3xl"
            src="/images/whylead/whyLead4Compressed.jpg"
            alt="Why Lead Feature"
          />
        </div>
      </motion.div>

      {/* Paragraph */}
      <div className="mt-5 sm:mx-8 md:mx-20 lg:mx-32">
        <p className="mt-3 text-justify text-md">
          Welcome to<Link href="/"><span className="font-extrabold dark:text-orange-500">&nbsp;Lead</span></Link>, your ultimate solution to scaling your company's outreach and generating more leads! <span className="font-semibold">Our website provides a comprehensive suite of marketing team and sales automation tools designed to help you expand your reach and achieve your business goals.</span>
        </p>

        <p className="mt-3 text-justify text-md">
          With Lead, you'll be able to streamline your marketing and sales processes, allowing you to focus on what matters most - growing your business. Our platform is built with cutting-edge technology and is designed to be user-friendly, so you can get started quickly and easily.
        </p>

        <p className="mt-3 text-justify text-md">
          Whether you're looking to optimize your email marketing campaigns, automate your sales funnel, or boost your social media presence, Lead has everything you need to succeed. So why wait? Sign up today and start generating more leads for your company!
        </p>

        {/* Chat GPT */}
        <p className="mt-4 text-xs font-ShareTechMono md:text-sm dark:text-neutral-600">
          From ChatGPT: Optimizing Language Model for Dialogue
        </p>
      </div>
    </div>
  );
};

export default index;