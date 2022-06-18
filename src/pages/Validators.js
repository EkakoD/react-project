import { registerUser, loginUser } from '../actions/user'
const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email)
}


export const Validators = {
    validateLogin: (values) => {
        const errors = {};
        
        if (!values.email) {
            errors.email = "Email is required";
        }

        if (values.email && !validateEmail(values.email)) {
            errors.email = "Wrong format of email"
        }

        if (!values.password) {
            errors.password = "Password is required"
        }
        if (!Object.keys(errors).length && !loginUser(values)) {
            errors.wrongEmailOrPassword = "Wrong email or password"
        }
        const k = loginUser(values);

        return errors;
    },

    validateRegister: (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Email is required";
        }

        if (values.email && !validateEmail(values.email)) {
            errors.email = "Wrong format of email"
        }

        if (!values.password) {
            errors.password = "Password is required"
        }


        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Please enter same password";
        }
        const k = registerUser(values);

        if (!Object.keys(errors).length && registerUser(values)) {
            errors.alreadyExists = "User with current email already exists"
        }

        return errors;
    },


}