import React from 'react'

function ChargeSection() {
    return (
        <div className='lg:px-22 px-12 space-y-9'>
            <div className='grid lg:grid-cols-6 space-y-9 '>
                <div className='lg:col-span-4'>
                    <h3 className='font-semibold lg:text-5xl text-4xl'>Find Your Charge</h3>
                    <p className='lg:text-xl text-base font-medium text-gray-500'>View the network of Tesla Superchargers and Destination Chargers available near you.</p>
                </div>
                <div className='lg:col-span-2 grid grid-cols-2 pt-2.5'>
                    <div>
                        <p className='lg:text-4xl text-3xl font-bold leading-6'>27,140 <button className=''><i class="bi bi-lightning-charge-fill md:text-2xl text-xl text-white rounded-full md:px-2 px-1 bg-orange-600 md:py-1 py-0.5"></i></button> <br /><span className='md:text-xl text-lg font-semibold text-gray-500'>Superchargers</span></p>
                    </div>
                    <div>
                        <p className='lg:text-4xl text-3xl font-bold leading-6 md:w-46'>9,267 <button><i class="bi bi-usb-plug md:text-2xl text-xl text-white rounded-full md:px-2 px-1 bg-gray-500 md:py-1 py-0.5"></i></button> <br /> <span className='md:text-xl text-lg font-semibold text-gray-500 leading-4'>Destination Chargers</span></p>
                    </div>
                </div>
            </div>
            <div className='space-x-4 space-y-4'>
                <button className=' bg-black cursor-pointer text-white rounded-md py-2  font-semibold text-sm md:w-35 whitespace-nowrap  w-full'>View Network</button>
                <button className=' bg-gray-100 cursor-pointer text-black rounded-md py-2  font-semibold text-sm md:w-35 whitespace-nowrap w-full'>Learn More</button>
            </div>
        </div>
    )
}

export default ChargeSection
