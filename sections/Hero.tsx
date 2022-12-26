import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className='flex mt-10'>

        {/* Column 1 */}
        <div className='flex'>
          {/* Column 1.1 */}
          <div className='relative'>
            <div className='absolute mt-14'>
              {/* Light Curve Line */}
              <Image
                src="/images/hero/patternCurveLine.png"
                width={300}
                height={300}
                alt="orangeLead Portrait"
                className="dark:hidden rounded-xl ml-80"
              />

              {/* Light Curve Line */}
              <Image
                src="/images/hero/patternCurveLineWhite.png"
                width={300}
                height={300}
                alt="orangeLead Portrait"
                className="hidden dark:block rounded-xl ml-80"
              />

              <h1 className='max-w-2xl mt-1 font-medium text-7xl font-Montserrat'>A <span className='font-extrabold'>super solution</span> for your <span className='font-extrabold'>business.</span></h1>

              <p className='max-w-sm font-medium tracking-wider mt-14 font-Montserrat text-neutral-700 dark:text-neutral-500'>Our marketing team and sales automations <br></br>help you scale your outreach to get <br></br> more leads for your company.</p>

              <button className="px-6 py-3 mt-16 mr-4 font-semibold text-white bg-transparent bg-orange-500 rounded hover:bg-orange-400 hover:text-black font-Montserrat">
                Request Beta Access
              </button>
            </div>

            <div className='ml-96'>
              <Image
                src="/images/hero/orangeLeadPortrait2.jpg"
                width={380}
                height={370}
                alt="orangeLead Portrait"
                className="ml-20 rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className='flex-col mt-20 ml-28 font-Montserrat'>

          <div>
            <h2 className='mt-16 text-5xl font-bold'>2K+</h2>
            <h4 className='font-medium  text-neutral-500'>COMPANIES</h4>
          </div>

          <div>
            <h2 className='mt-16 text-5xl font-bold'>8</h2>
            <h4 className='font-medium  text-neutral-500'>LANGUAGES</h4>
          </div>

          <div>
            <h2 className='mt-16 text-5xl font-bold'>1.2M</h2>
            <h4 className='font-medium  text-neutral-500'>LEADS</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero