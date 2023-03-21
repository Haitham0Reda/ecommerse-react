import React, { useState } from 'react';
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(null);
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        console.log(`Email: ${email} Password: ${password}`);
    };

    const validateForm = () => {
        if (!email || !password) {
            setFormError('Please fill in all required fields.');
            return false;
        }

        if (!isValidEmail(email)) {
            setFormError('Please enter a valid email address.');
            return false;
        }

        if (password.length < 8 && regex) {
            setFormError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return false;
        }

        setFormError(null);
        return true;
    };

    const isValidEmail = (email) => {

        // This regular expression pattern will match a valid email address. 
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        return emailPattern.test(email);
    };

    return (
        <>
            <MetaTitle title="Login" />
            <BreadCrumb title="Login" />
            <div className="login-wrapper home-wrapper-2 p-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <form className='login-form' onSubmit={handleSubmit}>
                                <h2>Login</h2>
                                {formError && <div className="alert alert-danger err">{formError}</div>}
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className='form-control'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className='button'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
