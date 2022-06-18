
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Validators } from './Validators';

function RegisterClient({ addLoginUser }) {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        isClient: true
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(Validators.validateRegister(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (isSubmit) {
            if (!formErrors.wrongEmailOrPassword) {
                setIsSubmit(false);
                addLoginUser(formValues);
                setFormValues({ email: "", password: "", confirmPassword: "" });
            }
        }
    }, [formErrors])

    return (
        <div className="grid place-items-center h-screen ">
            <div className="w-full max-w-xs">
                <div className="relative w-full h-full">
                    <Link className="absolute bottom-0 right-0 text-sky-600" to="/login">Login</Link>
                </div>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="d-flex text-center py-2">
                        <h1 className="underline decoration-sky-500">Register Client</h1>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="
                            shadow appearance-none border rounded w-full py-2 px-3
                             text-gray-700 leading-tight focus:outline-none 
                             focus:shadow-outline"
                            name="email"
                            type="text"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <p className="text-orange-600">{formErrors.email}</p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="
                        shadow appearance-none border 
                         rounded w-full
                         py-2 px-3 text-gray-700 mb-3 leading-tight 
                         focus:outline-none focus:shadow-outline"
                            value={formValues.password}
                            onChange={handleChange}
                            name="password"
                            type="password"
                        />
                        <p className="text-orange-600">{formErrors.password}</p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input className="
                        shadow appearance-none border 
                         rounded w-full
                         py-2 px-3 text-gray-700 mb-3 leading-tight 
                         focus:outline-none focus:shadow-outline"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword"
                            type="password"
                        />
                        <p className="text-orange-600">{formErrors.confirmPassword}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700
                         text-white font-bold py-2 px-4 rounded focus:outline-none
                          focus:shadow-outline" >
                            Register
                        </button>
                        <Link className="text-sky-600" to="/registerBarber">Register as Barber</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default RegisterClient;