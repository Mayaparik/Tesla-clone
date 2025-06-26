import React from 'react'

function Discover() {
  return (
    <div className='relative group '>
            <button className='px-5 py-1 lg:hover:bg-gray-200 rounded-md  duration-600 cursor-pointer'>Discover</button>
            <div className=" w-screen  max-h-[70vh] overflow-y-auto overscroll-contain fixed hidden lg:group-hover:flex left-0  bg-white text-black rounded-md mt-0 z-50 shadow-lg">
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto px-32 justify-center max-w-6xl py-20'>
                    <div>
                        <ul className='space-y-3 px-13'>
                            <li className='first:text-gray-500 first:pb-3'><a>Resources</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Demo Drive</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Insurance</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>American Heroes</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Learn</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Video Guides</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Cusromer Stories</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Events</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Workshops</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-3 px-13'>
                            <li className='first:text-gray-500 first:pb-3'><a >Location Services</a></li>                            
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Find Us</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Find a Collision Center</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Find a Certified Installer</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-3 px-13'>
                            <li className='first:text-gray-400 first:pb-3 '><a>Company</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>About</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Careers</a></li>
                            <li><a className='hover:border-b-2 border-black cursor-pointer'>Investor Relations</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Discover
