import React from 'react';
import './Banner.css';
import img from '../../../images/doctor.png'

const Banner = () => {
    return (
        <div className='img-banner'>
            <div className="container">
                <div className="d-flex flex-lg-row flex-column align-items-center">
                    <div className="col-lg-7 col-12 text-light text-left">
                        <h1 className="w-75">Educato – The Best Online Education Teaching Centre
                        </h1>
                        <p className="w-75">Online learning gives educators an opportunity to reach students who may not be able to enroll in a traditional classroom course and supports students who need to work on their own schedule and at their own pace.
                        </p>
                        <button className="btn btn-outline-light">Learn More</button>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;