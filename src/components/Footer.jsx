import React from 'react'


function Footer() {
    return (
        <div className='md:max-w-5xl w-full lg:px-12 px-7 m-auto space-y-6 mb-7'>
            <div className='space-y-4'>
                <p className='text-xs text-gray-500 font-semibold'><sup>1</sup> Model X All-Wheel Drive starts at $91,630. Price includes Destination and Order Fees but exclude taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price.</p>
                <p className='text-xs text-gray-500 font-semibold'><sup>2</sup> Model S All-Wheel Drive starts at $86,630. Price includes Destination and Order Fees but exclude taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price.</p>
            </div>
            <div className='flex md:flex-row flex-col justify-center space-x-7 space-y-3 text-center text-gray-700 text-xs cursor-pointer'>
                < a>Tesla © 2025</a>
                <a>Privacy & Legal</a>
                <a>Vehicle Recalls</a>
                <a>Contact</a>
                <a>News</a>
                <a>Get Updates</a>
                <a>Locations</a>
                <a>Learn</a>
            </div>

        </div>
    )
}

export default Footer
