import React from 'react'
import Image from 'next/image'

const Review = () => {
  return (
    <div>
      <div className='flex justify-center mx-32 mt-16 rounded-2xl bg-zinc-800 gap-44'>
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
        <div className='mt-20 w-80 font-Montserrat'>
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
  )
}

export default Review