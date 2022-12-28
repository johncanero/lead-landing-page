import React from 'react'
import Image from 'next/image'

const Review = () => {
  return (
    <div>
      <div className='justify-center mt-16 md:pb-6 lg:pb-0 lg:flex lg:mx-36 md:mx-auto rounded-2xl bg-neutral-800'>
        {/* Column 1 */}
        <div className="relative -mt-10">
          <Image
            src="/images/review/image-jeremy-large@2x.png"
            width={290}
            height={290}
            alt="people"
            className="w-56 mx-auto rounded-xl lg:w-72"
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
        <div className='mt-10 lg:mt-20 font-Montserrat'>

          {/* Column 3.1 */}
          <div className='mx-16 text-center lg:mx-0 lg:w-80'>
            <h2 className='text-4xl font-medium text-white'>It just <span className='font-bold '>works.</span></h2>
            <p className='mt-10 text-lg text-zinc-400'>"I really like how it is an all-in-one solution that handle many of the
              tasks that you would normally need seperate tools to do the same job. This thing is a miracle worker."</p>
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