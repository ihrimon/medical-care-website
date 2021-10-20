import React, { useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SignIn = () => {
    const { signInWithGoogle, signInWithGithub, handleEmailChange,
        handlePasswordChange, handleSignIn, error } = useAuth();

    return (
        <div className="container card w-50 my-5">
            <div className=" row gx-3">
                <div className="col-md-7 text-center py-5">
                    <h2>Sign in to Medical Care</h2>
                    <p>use social account</p>
                    <button onClick={signInWithGoogle} className="btn btn-danger btn-gmail">Gmail</button>
                    <button onClick={signInWithGithub} className="btn btn-primary btn-github ">Github</button>
                    <p>or use your email account</p>
                    <form onSubmit={handleSignIn}>
                        <input
                            onBlur={handleEmailChange} type="email" name="email" id="" className="input-field"
                            placeholder="Email" required />
                        <div>
                            <small className="text-danger">{error}</small>
                        </div>
                        <br />
                        <input
                            onBlur={handlePasswordChange} type="password" name="password" id="" className="input-field"
                            placeholder="password" required />
                        <div>
                            <small className="text-danger">{error}</small>
                        </div>
                        <br />

                        <input type="submit" value="Submit" className="btn-login" />
                        <br />
                        <Link to="/sign-up" className="text-login">
                            Are you a new user?
                        </Link>
                    </form>
                </div>

                <div className="bg-sign-in col-md-5 text-light text-center p-5">
                    <h2>Hello, Friend</h2>
                    <p>Enter your personal details and start journey with us.</p>
                    <Link to="/sign-up"><button className="btn btn-outline-light w-75" type="submit" >Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;