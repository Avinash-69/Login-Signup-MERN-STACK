import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/login', {email,password})
        .then(result => {
            console.log(result)
            if(result.data === "Success") {
                navigate('/home')
            }
            else {
                setErrorMessage('Invalid email or password.');
            }
            
        })
        .catch(err => console.log(err))

    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                    <p>Don't Have an Account</p>
                    <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Sign Up
                    </Link>
            </div>
        </div>

    );
}

export default Login;
