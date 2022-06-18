
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { bookBarber, hasBookedBarber } from '../../actions/user'
import { addBarberReview, getBarberDetails } from '../../actions/barber'
import Header from '../../components/header'

function BarberDetail({ user, logOut }) {

    const params = useParams();
    const navigate = useNavigate();
    const [barberDetails, setBarberDetails] = useState({});
    const [showButton, setShowButton] = useState(true);

    const [reviewForm, setReviewForm] = useState({
        score: 5,
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewForm({ ...reviewForm, [name]: value });
    };

    const handleBarberBooking = () => {
        const res = bookBarber(user.email, barberDetails.id);
        navigate("/barbers");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = addBarberReview(barberDetails.id, reviewForm);
        if (res) {
            navigate("/barbers");
            setReviewForm({ score: 1, comment: "", });
        }
    };

    useEffect(() => {
        const parsedbarberId = parseInt(params.barberId)
        const barber = getBarberDetails(parsedbarberId);
        setBarberDetails(barber);
        const showButtons = user.isClient !== undefined ? user.isClient : true;
        setShowButton(showButtons);


    }, []);

    return (
        <div className="w-full h-full">
            <Header logOut={logOut} />

            <div className="grid place-items-center h-screen">
                <div className="flex flex-center   mx-auto bg-slate-400 rounded px-5 py-5">
                    <div className="w-auto txt-md block">
                        <div>Barber Details</div>
                        <p>{barberDetails?.firstName}</p>
                        <p>{barberDetails?.lastName}</p>
                        <p>{barberDetails?.email}</p>
                        <p>{barberDetails?.address}</p>
                        <p>{barberDetails?.price}$</p>
                        {!hasBookedBarber(user.email, barberDetails?.id) && showButton ? (
                            <button onClick={handleBarberBooking} className="bg-blue-500 hover:bg-blue-700
                        text-white font-bold py-2 px-4 rounded focus:outline-none
                         focus:shadow-outline" >
                                Book now
                            </button>
                        ) : showButton ?
                            (<form onSubmit={handleSubmit} className="mt-5">
                                <div className="group">
                                    <label htmlFor="score" className="form-label">
                                        Choose rate {reviewForm.score} / 10
                                    </label>
                                    <input
                                        type="number"
                                        className=" shadow appearance-none border rounded w-full py-2 px-3
                                    text-gray-700 leading-tight focus:outline-none 
                                    focus:shadow-outline"
                                        name="score"
                                        value={reviewForm.score}
                                        min="0"
                                        max="10"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="group">
                                    <label
                                        htmlFor="comment"
                                        className="form-label inline-block mb-2 text-gray-700"
                                    >
                                        Write your comment
                                    </label>
                                    <textarea
                                        className="block p-2.5 w-full text-sm 
                                    text-gray-900 bg-gray-50 rounded-lg 
                                    border border-gray-300 focus:ring-blue-500 
                                    focus:border-blue-500 dark:bg-gray-200
                                     dark:border-gray-600 dark:placeholder-gray-400
                                      dark:text-black dark:focus:ring-blue-500 
                                      dark:focus:border-blue-500"
                                        name="comment"
                                        onChange={handleChange}
                                        value={reviewForm.comment}
                                        rows="2"
                                        placeholder="Your comment"
                                    ></textarea>
                                </div>
                                <button className=" mt-3 bg-blue-500 hover:bg-blue-700
                              text-white font-bold py-2 px-4 rounded focus:outline-none
                              focus:shadow-outline">
                                    Add review
                                </button>
                            </form>) : ""
                        }
                    </div>
                    <ul className="ml-20 mr-5 ">
                        Reviews:
                        {!barberDetails?.review?.length ? (
                            <p>No reviews yet</p>
                        ) : (
                            barberDetails?.review?.map((reviewItem, index) => (
                                <li key={index}>
                                    <p>
                                        <span className="text-amber-500">score:</span> {reviewItem?.score}/10
                                    </p>
                                    <p>{reviewItem?.comment}</p>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BarberDetail;