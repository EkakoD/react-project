import UserData from '../data/data.json'

export const registerUser = (newUser) => {
    const data = Array.from(UserData);
    const id = data.length;
    const model = {
        id: id,
        firstName: newUser.firstName ? newUser.firstName : null,
        lastName: newUser.lastName ? newUser.lastName : null,
        email: newUser.email,
        address: newUser.address ? newUser.address : null,
        price: newUser.price ? newUser.price : null,
        password: newUser.password,
        isClient: newUser.isClient,
        bookedBarberIds: [],
        review: []
    }
    UserData.push(model)
    return true;
}

export const loginUser = (user) => {

    const authUser = UserData.find(x => x.email === user.email
        && x.password === user.password
        && x.isClient === true);

    if (authUser) {
        return { ...authUser }
    }
    return false;
}

export const bookBarber = (userEmail, barberId) => {

    const activeUser = UserData.find(x => x.email === userEmail);

    if (activeUser) {
        activeUser.bookedBarberIds.push(barberId);

    }

    return false;
}

export const hasBookedBarber = (userEmail, barberId) => {

    const activeUser = UserData.find(x => x.email === userEmail);

    if (activeUser) {
        const bookedBarbersId = activeUser.bookedBarberIds.indexOf(barberId);

        if (bookedBarbersId !== -1) {
            return true;
        }
    }

    return false;
}