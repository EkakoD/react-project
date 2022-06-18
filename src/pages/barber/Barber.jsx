import React from 'react'

const Barber = ({ barber }) => {
    return (
        <div className='flex items-center rounded-lg cursor-pointer px-4'>

            <div className='flex flex-col w-full '>
                <p>{barber.firstName}</p>
                <p>{barber.lastName}</p>
                <p>${barber.price}</p>
            </div>
            <div className="block items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700
                         text-white font-bold py-2 px-4 rounded focus:outline-none
                          focus:shadow-outline" >
                    Details
                </button>
            </div>

        </div>
    )
}

export default Barber