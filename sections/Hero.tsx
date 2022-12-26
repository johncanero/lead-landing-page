import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='flex mt-16'>

        {/* Column 1 */}
        <div>
          <div>
            <h1 className='max-w-xl text-6xl font-medium tracking-wide font-Montserrat '>A <span className='font-extrabold'>super solution</span> for your <span className='font-extrabold'>business.</span></h1>

            <p className='max-w-sm font-medium tracking-wider mt-14 font-Montserrat text-neutral-700 dark:text-neutral-500'>Our marketing team and sales automations <br></br>help you scale your outreach to get <br></br> more leads for your company.</p>
          </div>

          <button className="px-6 py-3 mt-16 mr-4 font-semibold text-white bg-transparent bg-orange-500 rounded hover:bg-orange-400 hover:text-black font-Montserrat">
            Request Beta Access
          </button>
        </div>

        {/* Column 2 */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default Hero