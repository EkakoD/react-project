import UserData from '../data/data.json'


export const getBarberList = () => {
    const barberList = UserData.map(x => x);
    return barberList;
}

export const getBarberDetails = (id) => {
    const barber = UserData.find(x => x.id === id);

    if (barber) {
        return { ...barber }
    }

    return null;
}

export const addBarberReview = (id, review) => {

    const barber = UserData.find(x => x.id === id);

    if (barber) {

        barber.review.push(review);
        return true;
    }

    return null
}