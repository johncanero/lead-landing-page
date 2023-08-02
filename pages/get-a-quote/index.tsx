import React from "react";
import Head from "next/head";
import Image from "next/image";
// Framer-Motion
import { motion } from "framer-motion"


const index = () => {
  return (
    <div>
      <Head>
        <title>Get A Quote / Lead</title>
        <meta
          name="description"
          content="Get A Quote: Lead"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Get A Quote: Lead" />
        <meta property="og:description" content="Get A Quote: Lead" />
        {/* Sitemap */}
      </Head>
      <div className="mb-32 md:mb-0 lg:px-32">
        <h1 className="mt-6 mb-3 text-2xl font-bold text-center text-neutral-600 md:text-2xl font-Montserrat dark:text-neutral-300">
          Get A Quote
        </h1>

        <div className="justify-center lg:flex">
          {/* Digital Marketing Services */}
          <div className="mx-8 mt-4 md:mx-16 lg:mt-4 lg:mx-0 md:max-w-2xl lg:max-w-3xl font-Montserrat">

            <h2 className="text-lg font-semibold lg:text-xl ">Looking to take your business to the next level?</h2>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl lg:text-5xl">Look no further than <span className="dark:text-orange-500">Lead!</span></h2>
            <p className="mt-4 dark:text-neutral-400">
              Our powerful marketing team and sales automation tools are designed to help you scale your outreach and generate more leads than ever before.
            </p>

            <p className="mt-4 dark:text-neutral-400">
              With Lead, you can streamline your marketing and sales processes, automate your workflows, and achieve your business goals faster and more efficiently than ever. So why wait? Sign up today and start using Lead to take your business to the next level!</p>

            {/* Chat GPT */}
            {/* <p className="mt-4 text-xs font-ShareTechMono md:text-sm dark:text-neutral-600">
              From ChatGPT: Optimizing Language Model for Dialogue
            </p> */}
          </div>


          <div className="flex-col mx-8 md:ml-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.4,
              }}
            >
              {/* Mobile and Tablet */}
              <Image
                src="/images/getaquote/getAQuoteImageCompressed.jpg"
                width={390}
                height={390}
                alt="orangeLead Landscape"
                className="mx-auto mt-6 lg:hidden rounded-xl"
              />
              {/* Desktop */}
              <Image
                src="/images/getaquote/getAQuoteImageCompressed.jpg"
                width={390}
                height={390}
                alt="orangeLead Portrait"
                className="hidden md:ml-20 rounded-xl lg:block"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default index;