
import { useEffect, useState, Fragment } from "react";
import { getBarberList } from '../../actions/barber'
import { Link } from "react-router-dom";
import Barber from './Barber'
import Header from '../../components/header'
function Barbers({user,logOut}) {
    const [barberList, setBarberList] = useState();
    useEffect(() => {
        setBarberList(getBarberList())
    }, [])
    return (
        <div className="w-full h-full">
            <Header logOut={logOut} />
            <div className="grid place-items-center h-screen ">
                <div className="w-full max-w-xs">
                    {barberList?.lenght !== 0 ?
                        barberList?.map((barber) =>
                            <Fragment key={barber.id}>
                                <div className="py-3 px-1 my-2 max-w-sm
                             bg-white rounded-lg border 
                             border-gray-200 shadow-md 
                             dark:bg-gray-200 
                             dark:border-gray-700">
                                    <Link to={`/barbers/${barber.id}`} className=''>
                                        <Barber key={barber.id} barber={barber} />
                                    </Link>
                                </div>

                            </Fragment>
                        ) :
                        <div>No barbers data</div>}
                </div>
            </div>
        </div>
    )
}

export default Barbers;