import React from 'react';
import './Signin.css';
import img from '../../images/doctor.png'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div class="container card w-50 my-5">
            <div class=" row gx-3">
                <div class="col-md-7 text-center py-5">
                    <h2>Sign in to Medical Care</h2>
                    <p>use social account</p>
                    <button className="btn btn-danger btn-gmail">Gmail</button>
                    <button className="btn btn-primary btn-github ">Github</button>
                    <p>or use your email account</p>
                    <form>
                        <input type="text" name="Name" id="" className="input-field"
                            placeholder="Name" />
                        <input
                            type="email" name="email" id="" className="input-field"
                            placeholder="Email" required />
                        <br />
                        <input
                            type="password" name="password" id="" className="input-field"
                            placeholder="password" required />
                        <br />

                        <input type="submit" value="Login" className="btn-login" />
                        <br />
                        <Link to="/signup" className="text-login">
                            Are you a new user?
                        </Link>
                    </form>
                </div>

                <div class="bg-sign-in col-md-5 text-light text-center p-5">
                    <h2>Hello, Friend</h2>
                    <p>Enter your personal details and start journey with us.</p>
                    <Link to="/signup"><button className="btn btn-outline-light w-100" type="submit" >Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;