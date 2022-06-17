import React from 'react'
import { Link } from 'react-router-dom'
// import { Barber } from './Barber'
// import Loader from '../components/Loader'

// import { useStore } from '../store/StoreContext'
// import { handleAddProduct } from '../store/actions'
import Data from '../../data/data.json'
// import * as DbActions from '../../data/data.json'

const Barbers = () => {

    // const { state: { products, isLoading }, dispatch } = useStore()

    const renderData = () => (
        <div>
            {
                Data.map((barber) => {
                    barber.isClient &&
                        <div key={barber.id}>
                            <Link to={`/barbers/${barber.id}`} className='flex flex-col w-1/2 '>
                                <div>{barber.firstName}</div>
                                {/* <Barber key={barber.id} product={barber} /> */}
                            </Link>
                            <button className='p-2 mt-4 ml-10 text-white bg-blue-400'
                            // onClick={() => dispatch(handleAddProduct(barber))}
                            >
                                Details
                            </button>
                        </div>
                }

                )
            }
        </div>
    )


    const renderContent = () => (
        <>
            {renderData()}
            {/* {isLoading ? <Loader /> : renderData()} */}
        </>
    )

    return (
        <div className='flex flex-col flex-wrap items-center w-full'>
            {renderContent()}
        </div>
    )
}

export default Barbers