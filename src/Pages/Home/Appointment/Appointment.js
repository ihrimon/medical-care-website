import React from 'react';
import './Appointment.css';
import img from '../../../images/banner.png'
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div>
            <div className="container d-flex flex-lg-row flex-column align-items-center justify-content-between mt-5">
                <div className="col-lg-6 col-12 order-2">
                    <img src={img} className="w-100" alt="" />
                </div>
                <div className="col-lg-6 col-12 order-1">
                    <h5 className="text-success">Need A Doctor For Free Consult?</h5>
                    <h2>You can make an Appointment for your problem</h2>
                    <p>Consult with city's top doctors online safely from home. No travelling, no waiting. Talk to highly experienced specialists via call, chat or video. Consult now! 5 Days Free Follow-Up.</p>
                    <Link to="/appointment-form"><button className="btn btn-outline-success rounded-0" type="submit" >Get an Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Appointment;