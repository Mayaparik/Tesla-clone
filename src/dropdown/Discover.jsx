import React from 'react'

function Discover() {

    const List1 = [
        "Demo Drive", "Insurance", "American Heroes", "Learn", "Video Guides", "Customer Stories", "Events", "Workshops"
    ]

    const List2 = [
        "Find Us", "Find a Collision Center", "Find a Certified Installer"
    ]

    const List3 = [
        "About", "Carrers", "Investor Relations"
    ]

    return (
        <div className='relative group '>
            <button className='px-5 py-1 lg:hover:bg-gray-200 rounded-md  duration-600 cursor-pointer'>Discover</button>
            <div className=" w-screen  max-h-[70vh] overflow-y-auto overscroll-contain fixed hidden lg:group-hover:flex left-0  bg-white text-black rounded-md mt-0 z-50 shadow-lg">
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto px-32 justify-center max-w-6xl py-20'>
                    <div>
                        <ul className='space-y-3 px-13'>
                            <li className='first:text-gray-500 first:pb-3'><a>Resources</a></li>
                            {
                                List1.map((lt, index) => (
                                    <li key={index}>
                                        <li><a className='hover:border-b-2 border-black whitespace-nowrap'>{lt}</a></li>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-3 px-13'>
                            <li className='first:text-gray-500 first:pb-3'><a >Location Services</a></li>
                             {
                                List2.map((lt, index) => (
                                    <li key={index}>
                                        <li><a className='hover:border-b-2 border-black whitespace-nowrap'>{lt}</a></li>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-3 px-13'>
                            <li className='first:text-gray-400 first:pb-3 '><a>Company</a></li>
                              {
                                List3.map((lt, index) => (
                                    <li key={index}>
                                        <li><a className='hover:border-b-2 border-black whitespace-nowrap'>{lt}</a></li>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover
