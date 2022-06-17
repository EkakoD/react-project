import UserData from '../data/data.json'

export const registerUser = (newUser) => {
    console.log(UserData.length());
    const id = UserData.length();
    UserData.push({
        id: id,
        firstName: newUser.firstName ? newUser.firstName : null,
        lastName: newUser.lastName ? newUser.lastName : null,
        email: newUser.email,
        address: newUser.address ? newUser.address : null,
        price: newUser.price ? newUser.price : null,
        password: newUser.password,
        isClient: newUser.isClient,
        bookedBarberIds: [],
        userRates: []
    })

    return true;
}

export const loginUser = (user) => {
    // const { email, password } = user;

    const authUser = UserData.find(x => x.email === user.email && x.password === user.password);

    if (authUser) {
        return { ...authUser }
    }

    return false;
}

export const bookBarber = (userId, barberId) => {

    const activeUser = UserData.find(x => x.id === userId);

    if (activeUser) {
        activeUser.bookedBarberIds.push(barberId);
    }

    return false;
}

export const hasBookedBarber = (userId, barberId) => {

    const activeUser = UserData.find(x => x.id === userId);

    if (activeUser) {
        const bookedBarbersId = activeUser.bookedBarberIds.indexOf(barberId);
        console.log(bookedBarbersId)
        if (bookedBarbersId !== -1) {
            return true;
        }
    }

    return false;
}