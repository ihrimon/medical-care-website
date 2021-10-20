import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/finddoctor.png'

const FindDoctors = () => {
    return (
        <div>
            <div className="container d-flex flex-lg-row flex-column justify-content-between mt-5">
                <div className="col-lg-6 col-12 me-5">
                    <img src={img} className="w-100" alt="" />
                </div>
                <div className="col-lg-6 col-12 mt-4 mt-lg-0 ms-3">
                    <h5 className="text-success w-50">Need A Doctor For Free Consult?</h5>
                    <h2 className="w-75">You can find our best qualified doctors for your problem anywhere and anytime</h2>
                    <p className="w-75 pt-3">Consult with city's top doctors online safely from home. No travelling, no waiting. Talk to highly experienced specialists via call, chat or video. Consult now! 5 Days Free Follow-Up.</p>
                    <Link to="/doctors"><button className="btn btn-outline-success mt-4 rounded-0" type="submit" >Free Consultation</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FindDoctors;