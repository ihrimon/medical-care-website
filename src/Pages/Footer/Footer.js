import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="bg-light py-5">
                <div className="container d-flex flex-wrap text-start">
                    <div className="col-lg-3 col-6">
                        <NavLink to="#headernpm i react-router-hash-link">
                            <img src={logo} alt="" />
                        </NavLink>
                        <p>Online learning gives educators an opportunity to reach students who may not be able to enroll.</p>
                    </div>
                    <div className="col-lg-3 col-6">
                        <h5>Explore</h5>
                        <ul>
                            <li>About us</li>
                            <li>Success Story</li>
                            <li>Careers</li>
                            <li>Resource Center</li>
                            <li>Courses</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6">
                        <h5>Categories</h5>
                        <ul>
                            <li>All Courses</li>
                            <li>Digital Marketing</li>
                            <li>Design and Marketing</li>
                            <li>Veterans</li>
                            <li>Courses</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6">
                        <h5>Support</h5>
                        <ul>
                            <li>Help Center</li>
                            <li>System Requirements</li>
                            <li>Register Activation Key</li>
                            <li>Site Feedback</li>
                            <li>Forumes</li>
                        </ul>
                    </div>
                </div>
                <p className="my-5 pb-5 text-center">Copyright@2021 Educato. All Rights Reserved. Create by webpixi author</p>
            </div>
        </div>
    );
};

export default Footer;