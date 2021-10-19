import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="container card w-50 my-5">
            <div className=" row gx-3">
                <div className="bg-sign-in col-md-5 text-light text-center p-5">
                    <h2>Welcome Back!</h2>
                    <p>To keep connected with us please login with your personal info.</p>
                    <Link to="/sign-in"><button className="btn btn-outline-light w-100" type="submit" >SIGN IN</button></Link>
                </div>

                <div className="col-md-7 text-center py-5">
                    <h2>Create an Account</h2>
                    <p>use social account</p>
                    <button onClick={signInWithGoogle} className="btn btn-danger btn-gmail">Gmail</button>
                    <button className="btn btn-primary btn-github ">Github</button>
                    <p>or use your email account</p>
                    <form>
                        <input type="text" name="Name" id="" className="input-field"
                            placeholder="Name" />
                        <input
                            type="address" name="address" id="" className="input-field"
                            placeholder="Address" />
                        <br />
                        <input
                            type="email" name="email" id="" className="input-field"
                            placeholder="Email" required />
                        <br />
                        <input
                            type="password" name="password" id="" className="input-field"
                            placeholder="password" required />
                        <br />

                        <input type="submit" value="SIGN UP" className="btn-login" />
                        <br />

                        <Link to="/sign-in" className="text-login">
                            Already have an account?
                        </Link>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignUp;