import React from 'react'
import Image from 'next/image'

const Review = () => {
  return (
    <div>
      <div className='flex justify-center mx-32 mt-16 rounded-2xl bg-neutral-800'>
        {/* Column 1 */}
        <div>
          <Image
            src="/images/review/image-jeremy-large@2x.png"
            width={290}
            height={290}
            alt="people"
            className="rounded-xl "
          />
        </div>

        {/* Column 2 */}
        <div className='flex mt-20 font-Montserrat'>
          {/* Column 2.1 */}
          <div>
            <Image
              src="/images/review/patternCurveDiagonalLine.png"
              width={60}
              height={60}
              alt="Curve Diagonal Line"
              className="mt-16 mx-14"
            />
          </div>

          {/* Column 2.2 */}
          <div className='w-80'>
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