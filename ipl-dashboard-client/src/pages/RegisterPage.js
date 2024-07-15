import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import './LoginPage.css';

async function registerUser(credentials) {
    const url = 'http://localhost:8080/api/v1/auth/register';
    const params = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": 'application/json',
            "Origin": "http://localhost:3000"
        },
        body: JSON.stringify(credentials)
    }
    const response = await fetch(url, params);

    if (response.ok) {
        return await response.json();
    } else {
        if (response.status === 404) {
            console.log("Server Not Found");
        }
        if (response.status === 500) {
            console.log("Server Failed");
        }
    }
}

export const RegisterPage = () => {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(inputs);
        let token;
        try{
            token = await registerUser(inputs);
        } catch(error){
            console.log("Unexpected Server Error");
        }
        console.log(token);
        if(token !== undefined){
            sessionStorage.setItem('token', JSON.stringify(token));
            navigate("/team")
        }
    }

    return (<div className="my-login-page"> <section className="h-100">
        <div className="container h-100">
            <div className="row justify-content-md-center h-100">
                <div className="card-wrapper">
                    <div className="brand">
                        <h1 className="card-title">IPL DashBoard</h1>
                    </div>
                    <div className="card fat">
                        <div className="card-body">
                            <h4 className="card-title">Register</h4>
                            <form className="my-login-validation" noValidate="" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input id="firstName" type="text" className="form-control" name="firstName" onChange={handleChange} required autoFocus />
                                    <div className="invalid-feedback">
                                        What's your name?
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input id="lastName" type="text" className="form-control" name="lastName" onChange={handleChange} required autoFocus />
                                    <div className="invalid-feedback">
                                        What's your name?
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">E-Mail Address *</label>
                                    <input id="email" type="email" className="form-control" name="email" onChange={handleChange} required />
                                    <div className="invalid-feedback">
                                        Your email is invalid
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input id="phoneNumber" type="number" className="form-control" name="phoneNumber" onChange={handleChange} />
                                    <div className="invalid-feedback">
                                        Your email is invalid
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password *</label>
                                    <input id="password" type="password" className="form-control" name="password" onChange={handleChange} required data-eye />
                                    <div className="invalid-feedback">
                                        Password is required
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Confirm Password *</label>
                                    <input id="confirm-password" type="confirm-password" className="form-control" name="confirm-password" onChange={handleChange} required data-eye />
                                    <div className="invalid-feedback">
                                        Password is required
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                        <input type="checkbox" name="agree" id="agree" className="form-check-input" defaultChecked />
                                        <label htmlFor="agree" className="custom-control-label">I agree to the <a href="#">Terms and Conditions</a></label>
                                        <div className="invalid-feedback">
                                            You must agree with our Terms and Conditions
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group d-grid gap-2">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Register
                                    </button>
                                </div>
                                <div className="mt-4 text-center">
                                    Already have an account?
                                    <Link to="/login">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> </div>
    );
}