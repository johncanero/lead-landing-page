import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div className="mb-32 md:mb-0 lg:px-32">
      <h1 className="mt-6 text-2xl font-bold text-center mb-3 text-neutral-600
       md:text-2xl font-Montserrat dark:text-neutral-300">
        Why Lead
      </h1>

      {/* Desktop */}
      <div
        className='flex justify-center mt-8'>
        <div className='hidden lg:block'>
          <Image
            width={650}
            height={450}
            className="w-full h-full border rounded-3xl"
            src="/images/whylead/whyLead2.jpg"
            alt="Why Lead Feature"
          />
        </div>
      </div>


      {/* Tablet & Mobile */}
      <div
        className='flex justify-center'>
        <div className='lg:hidden '>
          <Image
            width={500}
            height={300}
            className="md:rounded-3xl border"
            src="/images/whylead/whyLead2.jpg"
            alt="Why Lead Feature"
          />
        </div>
      </div>
    </div>
  );
};

export default index;