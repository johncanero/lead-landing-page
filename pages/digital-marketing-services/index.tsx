import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div className="mb-32 md:mb-0 lg:px-32">
      <h1 className="mt-6 text-2xl font-bold text-center mb-3 text-neutral-600
       md:text-2xl font-Montserrat dark:text-neutral-300">
        Digital Marketing Services
      </h1>


      <div className="lg:flex justify-center">
        {/* Digital Marketing Services */}
        <div className="mx-8 mt-4 md:mx-16 lg:mt-2 lg:mx-0 md:max-w-2xl lg:max-w-4xl font-Montserrat">
          <p className="text-justify text-md">
            1. <span className="font-bold dark:text-orange-400">Search engine optimization (SEO)</span>: optimizing website content and structure to improve organic search engine rankings and visibility.
          </p>
          <p className="text-justify text-md">
            2. <span className="font-bold dark:text-orange-400">Pay-per-click (PPC) advertising</span>: using platforms like Google AdWords to place ads and pay for clicks on those ads.
          </p>

          <p className="text-justify text-md">
            3. <span className="font-bold dark:text-orange-400">Social media marketing</span>: using social media platforms to promote products or services and engage with customers.
          </p>
          <p className="text-justify text-md">
            4. <span className="font-bold dark:text-orange-400">Email marketing</span>: sending promotional or informational emails to a list of subscribers.
          </p>

          <p className="text-justify text-md">
            5. <span className="font-bold dark:text-orange-400">Content marketing</span>: creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience, ultimately leading to profitable customer action.
          </p>
          <p className="text-justify text-md">
            6. <span className="font-bold dark:text-orange-400">Influencer marketing</span>: partnering with individuals or organizations that have a large following on social media or other platforms to promote products or services.
          </p>

          <p className="text-justify text-md">
            7. <span className="font-bold dark:text-orange-400">Affiliate marketing</span>: earning a commission by promoting other people's or companies' products.
          </p>

          <p className="text-justify textm-d ">
            8. <span className="font-bold dark:text-orange-400">Video marketing</span>: using video to promote products or services, either on platforms like YouTube or through video ads on other websites.
          </p>


          <p className="text-justify text-md ">
            9. <span className="font-bold dark:text-orange-400">Mobile marketing</span>: targeting and reaching customers through mobile devices, such as smartphones and tablets.
          </p>

          <p className="text-justify text-md ">
            10. <span className="font-bold dark:text-orange-400">Marketing automation</span>: using software to automate marketing tasks, such as email campaigns and social media posts.
          </p>

          <p className="text-justify text-md ">
            11. <span className="font-bold dark:text-orange-400 ">Local SEO</span>: optimizing a website for local search results, such as by including the location and phone number on the website and encouraging customer reviews.
          </p>

          <p className="text-justify text-md">
            12. <span className="font-bold dark:text-orange-400">Voice search optimization</span>: optimizing content for voice search queries, which are often more conversational and longer-tail than typed searches.
          </p>

          <p className="text-justify text-md">
            13. <span className="font-bold dark:text-orange-400">Online reputation management</span>: monitoring and improving a company's online reputation, including responding to customer reviews and managing the spread of negative information.
          </p>

          <p className="text-justify text-md">
            14. <span className="font-bold dark:text-orange-400 ">Conversion rate optimization (CRO)</span>: optimizing a website to increase the percentage of visitors who take a desired action, such as making a purchase or filling out a form.
          </p>
          <p className="text-justify text-md">
            15. <span className="font-bold dark:text-orange-400">Web design and development</span>: creating and maintaining a professional and functional website.
          </p>

          {/* Chat GPT */}
          <p className="mt-4 text-xs font-ShareTechMono md:text-sm dark:text-orange-500">
            From ChatGPT: Optimizing Language Model for Dialogue
          </p>
        </div>

        <div className="flex-col mx-8 md:ml-0">
          <div>
            {/* Mobile and Tablet */}
            <Image
              src="/images/hero/orangeLeadLandscape2.jpg"
              width={380}
              height={370}
              alt="orangeLead Landscape"
              className="mt-6 lg:hidden mx-auto rounded-xl"
            />
            {/* Desktop */}
            <Image
              src="/images/hero/orangeLeadPortrait2.jpg"
              width={340}
              height={370}
              alt="orangeLead Portrait"
              className="hidden md:ml-20 rounded-xl lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;