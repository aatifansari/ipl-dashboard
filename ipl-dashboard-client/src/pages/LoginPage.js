import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useRef } from 'react';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

async function loginUser(credentials) {
    const url = 'http://localhost:8080/api/v1/auth/authenticate';
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

export const LoginPage = () => {
    const [inputs, setInputs] = useState({});
    const [isVisible, setIsVisible] = useState(false);
    const emailInput = useRef(null);
    const loginForm = useRef(null);
    const serverError = useRef(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(inputs);
        if (inputs.email === undefined) {
            loginForm.current.className = "my-login-validation was-validated"
        }
        let token;
        try {
            token = await loginUser(inputs);
            setIsVisible(false);
        } catch (error) {
            setIsVisible(true);
        }

        // setIsVisible(true);
        console.log(token);
        if (token !== undefined) {
            console.log(token);
            sessionStorage.setItem('token', JSON.stringify(token));
            navigate("/team")
        }
    }

    return (
        <div className="my-login-page">
            <section className="h-100">
                <div className="container h-100">
                    <div className="row justify-content-md-center h-100">
                        <div className="card-wrapper">
                            <div className="brand">
                                <h1 className="card-title">IPL DashBoard</h1>
                            </div>
                            <div className="card fat">
                                <div className="card-body">
                                    <h4 className="card-title">Login</h4>
                                    {isVisible && <p className="server-error" ref={serverError} >Unexpected Server Error</p>}
                                    <form className="my-login-validation" onSubmit={handleSubmit} ref={loginForm} noValidate >
                                        <div className="form-group">
                                            <label htmlFor="email">E-Mail Address</label>
                                            <input id="email" type="email" className="form-control" name="email" onChange={handleChange} value={inputs.email || ""} required autoFocus />
                                            <div className="invalid-feedback" ref={emailInput}>
                                                Email is required
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password">Password
                                                <Link to="/forgot" className="float-end">Forgot Password?</Link>
                                            </label>
                                            <input id="password" type="password" className="form-control" name="password" onChange={handleChange} value={inputs.password || ""} required data-eye />
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="form-check">
                                                <input type="checkbox" name="remember" id="remember" className="form-check-input" defaultChecked />
                                                <label htmlFor="remember" className="form-check-label">Remember Me</label>
                                            </div>
                                        </div>

                                        <div className="form-group d-grid gap-2">
                                            <button type="submit" className="btn btn-primary">
                                                Login
                                            </button>
                                        </div>
                                        <div className="mt-4 text-center">
                                            Don't have an account?
                                            <Link to="/register">Create One</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
