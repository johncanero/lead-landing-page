import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className='flex-col mt-10 md:flex md:flex-wrap lg:flex-row'>

        {/* Column 1 */}
        <div className='md:flex'>
          {/* Column 1.1 */}
          <div className='relative'>
            <div className='mt-10 md:absolute md:mt-14'>
              {/* Dark Curve Line */}
              <Image
                src="/images/hero/patternCurveLine.png"
                width={300}
                height={300}
                alt="orangeLead Curve"
                className="w-40 ml-40 md:w-72 dark:hidden rounded-xl md:ml-80"
              />

              {/* Light Curve Line */}
              <Image
                src="/images/hero/patternCurveLineWhite.png"
                width={300}
                height={300}
                alt="orangeLead Curve"
                className="hidden w-40 ml-40 md:w-72 dark:block rounded-xl md:ml-80"
              />

              <h1 className='max-w-2xl text-4xl font-medium md:mt-1 md:text-7xl font-Montserrat dark:shadow-sm md:text-left'>A <span className='font-extrabold'>super solution</span> for your <span className='font-extrabold'>business.</span></h1>

              <p className='font-medium tracking-wider w-96 md:max-w-sm mt-7 md:mt-14 font-Montserrat text-neutral-700 dark:text-neutral-500'>Our marketing team and sales automations <br></br>help you scale your outreach to get <br></br> more leads for your company.</p>

              <button className="px-6 py-3 mr-4 font-semibold text-white bg-transparent bg-orange-500 rounded mt-9 md:mt-16 hover:text-black font-Montserrat">
                Request Beta Access
              </button>
            </div>

            <div className='md:ml-56 lg:ml-96'>
              {/* Mobile */}
              <Image
                src="/images/hero/orangeLeadLandscape2.jpg"
                width={380}
                height={370}
                alt="orangeLead Landscape"
                className="block mt-12 md:hidden rounded-xl"
              />
              {/* Tablet and Desktop */}
              <Image
                src="/images/hero/orangeLeadPortrait2.jpg"
                width={380}
                height={370}
                alt="orangeLead Portrait"
                className="hidden md:ml-20 rounded-xl md:block"
              />

            </div>

          </div>
        </div>

        {/* Column 2 */}

        <div className='relative justify-center mt-16 text-center lg:text-left lg:mt-0 md:gap-40 md:flex lg:flex-col lg:ml-56 font-Poppins'>

          <div className='mt-14 md:mt-0'>
            <h2 className='text-5xl font-bold '>2K+</h2>
            <h4 className='mt-1 font-medium text-neutral-500'>COMPANIES</h4>
          </div>

          <div className='mt-14 md:mt-0'>
            <h2 className='text-5xl font-bold '>8</h2>
            <h4 className='mt-1 font-medium text-neutral-500'>LANGUAGES</h4>
          </div>

          <div className='mt-14 md:mt-0'>
            <h2 className='text-5xl font-bold '>1.2M</h2>
            <h4 className='mt-1 font-medium text-neutral-500'>LEADS</h4>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        
      </div>
    </div>
  )
}

export default Hero