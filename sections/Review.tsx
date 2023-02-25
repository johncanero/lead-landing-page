import React from 'react'
import Image from 'next/image'

const Review = () => {
  return (
    <div>
      <div className='justify-center pb-2 mt-20 mb-32 pt-72 lg:pt-0 lg:flex lg:pb-0 lg:mx-36 md:mx-auto rounded-2xl dark:shadow-sm dark:shadow-black bg-neutral-800'>
        {/* Column 1 */}
        <div className="relative w-48 mx-auto lg:mx-0 lg:w-72">
          <Image
            src="/images/review/image-jeremy-large@2x.png"
            width={285}
            height={290}
            alt="people"
            className="absolute -mt-80 lg:-mt-10"
          />
        </div>

        {/* Column 2 */}
        <div>
          <Image
            src="/images/review/patternCurveDiagonalLine.png"
            width={60}
            height={60}
            alt="Curve Diagonal Line"
            className="mx-auto mt-10 lg:mt-32 lg:mx-14"
          />
        </div>

        {/* Column 3 */}
        <div className='mt-10 mb-10 lg:mt-20 font-Montserrat'>

          {/* Column 3.1 */}
          <div className='mx-16 text-center lg:mx-0 lg:w-80'>
            <h2 className='text-3xl font-medium text-white md:text-4xl'>It just <span className='font-bold '>works.</span></h2>
            <p className='mt-10 md:text-lg text-zinc-400'>"I really like how it is an all-in-one solution that handle many of the tasks that you would normally need seperate tools to do the same job. This thing is a miracle worker."</p>
            <div className='mt-10'>
              <p className='font-bold text-white'>JEREMY ROBINSON</p>
              <p className='font-medium text-zinc-400 '>CMO, FYLO</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Review