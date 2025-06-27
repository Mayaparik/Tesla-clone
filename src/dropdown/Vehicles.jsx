import React from 'react'
import model1 from '../assest/model1.png'
import model2 from '../assest/model2.png'
import model3 from '../assest/model3.png'
import model4 from '../assest/model4.png'
import model5 from '../assest/model5.png'
import model6 from '../assest/model6.png'

function Vehicles() {

    const Slides = [
        { image: model1, carName: "Model S", btnOne: "Learn", btnTwo: "Order" },
        { image: model2, carName: "Model 3", btnOne: "Learn", btnTwo: "Order" },
        { image: model3, carName: "Model Y", btnOne: "Learn", btnTwo: "Order" },
        { image: model4, carName: "Model X", btnOne: "Learn", btnTwo: "Order" },
        { image: model5, carName: "Cybertruck", btnOne: "Learn", btnTwo: "Order" },
        { image: model6, carName: "Inventory", btnOne: "Learn", btnTwo: "Order" }
    ]

    const list =[
        "Help Me Choose", "Demo Drive", "Trade-in", "Compare", "Workshop", "Help me Charge", "Fleet", "Semi", "Roadster", "Federal Tax Credit"
    ]

    return (
        <div className='relative group '>
            <button className='px-5 py-1 lg:hover:bg-gray-200 rounded-md  duration-600 cursor-pointer'>Vehicles</button>
            <div className="w-screen lg:max-h-full max-h-[81vh] overflow-y-auto overscroll-contain fixed hidden lg:group-hover:flex left-0  bg-white text-black rounded-md mt-0 z-50 shadow-lg ">
                <div className='grid lg:grid-cols-4 grid-cols-1 md:px-32 px-20 justify-center max-w-6xl lg:py-20 space-y-3'>
                    <div className='grid col-span-3 md:grid-cols-3  grid-cols-2 gap-7 md:pr-10 lg:border-r-2 border-gray-400  text-center'>
                        {
                            Slides.map((slide, index) => (
                                <div key={index} className='space-x-4 space-y-4'>
                                    <img src={slide.image} alt="" className='' />
                                    <p>{slide.carName}</p>
                                    <button className='underline text-gray-600 text-sm cursor-pointer hover:text-black'>{slide.btnOne}</button>
                                    <button className='underline text-gray-600 text-sm cursor-pointer hover:text-black'>{slide.btnTwo}</button>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <ul className='space-y-3  md:px-13 md:text-base text-lg mb-4 '>
                            {
                                list.map((lt, index) => (
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

export default Vehicles
