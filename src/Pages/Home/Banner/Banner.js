import React from 'react';
import './Banner.css';
import img from '../../../images/doctor.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='img-banner'>
            <div className="container">
                <div className="d-flex flex-lg-row flex-column align-items-center">
                    <div className="col-lg-7 col-12 pt-5 pt-lg-0 text-light text-left">
                        <h1 className="w-75">Best Medical And Health Care Center.
                        </h1>
                        <p className="w-75">Medical care is what physicians and other clinicians do every day with you in offices, labs, surgery centers, and hospitals. Titrating blood pressure med's. Checking blood sugar. Adding this medication on and stopping that medication.
                        </p>
                        <Link to="/about"><button className="btn btn-outline-light rounded-0 px-3" type="submit" >See More...</button></Link>
                    </div>
                    <div>
                        <img src={img} className="w-100 mt-5" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;