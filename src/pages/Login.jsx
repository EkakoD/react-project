
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Validators } from './Validators';

function Login({addActiveUser}) {
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(Validators.validateLogin(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            if(!formErrors.wrongEmailOrPassword) {
                setIsSubmit(false);
                addActiveUser(formValues);
                setFormValues({ email: "", password: "" });
            }
        }
    }, [formErrors])
    
    return (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <h1 className="underline decoration-sky-500">Login</h1>
                </div>
                <div>
                    <label className="txt-sm font-bold text-gray-600 block">Email</label>
                    <input
                        
                        name="email" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={ formValues.email }
                        onChange={ handleChange }
                    />
                    {/* <p className="text-orange-600">{ formErrors.email }</p> */}
                </div>
                <div>
                    <label className="txt-sm font-bold text-gray-600 block">Password</label>
                    <input
                        value={ formValues.password }
                        onChange={ handleChange }
                        name="password" type="password" className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                    {/* <p className="text-orange-600">{ formErrors.password }</p> */}
                </div>
                <div>
                    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm">
                        Login
                    </button>
                </div>
                {/* <p className="text-orange-600">{ formErrors.wrongEmailOrPassword }</p> */}
                <p>Don't have an account ? <Link to='/register' className="underline decoration-sky-500 text-cyan-500 hover:cursor-pointer">click here</ Link></p>
            </form>
    )
}

export default Login;