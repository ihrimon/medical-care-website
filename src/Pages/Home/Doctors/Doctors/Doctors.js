import React from 'react';
import doctor1 from '../../../../images/doctor1.png'
import doctor2 from '../../../../images/doctor2.png'
import doctor3 from '../../../../images/doctor3.png'
import doctor4 from '../../../../images/doctor4.png'
import doctor5 from '../../../../images/doctor5.png'
import doctor6 from '../../../../images/doctor6.png'
import './Doctors.css';

const Doctors = () => {
    return (
        <div className="container my-5">
            <div className="text-center w-lg-50 w-md-75 mx-auto mb-5">
                <h2 className="text-success" >Choose Our Qualified Doctors.</h2>
                <p>They are the frontline and first point of contact in a patient's health care. They diagnose and treat their patients for all sorts of ailments.</p>
            </div>
            <div className="doctor-container text-center">
                <div className="col">
                    <div className="card bg-card w-18rem border-0 p-3 d-flex flex-column align-items-center">
                        <img src={doctor1} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Jason Simpson</h5>
                            <p className="card-text">Neurologist</p>
                            <a href="#" className="btn btn-success">Contact Me</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-card w-18rem border-0 p-3 d-flex flex-column align-items-center">
                        <img src={doctor2} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Helen Mccoy</h5>
                            <p className="card-text">Gynecologist</p>
                            <a href="#" className="btn btn-success">Contact Me</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-card w-18rem border-0 p-3 d-flex flex-column align-items-center">
                        <img src={doctor3} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Casey Sanchez</h5>
                            <p className="card-text">Neurologist</p>
                            <a href="#" className="btn btn-success">Contact Me</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-card w-18rem border-0 p-3 d-flex flex-column align-items-center">
                        <img src={doctor4} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Dominick Gilbert</h5>
                            <p className="card-text">Dental Surgeon</p>
                            <a href="#" className="btn btn-success">Contact Me</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-card w-18rem border-0  p-3 d-flex flex-column align-items-center">
                        <img src={doctor5} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Wade Chapman</h5>
                            <p className="card-text">Terminologist</p>
                            <a href="#" className="btn btn-success">Contact Me</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-card w-18rem border-0 p-3 d-flex flex-column align-items-center shadow-sm">
                        <img src={doctor6} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Hazel Mendoza</h5>
                            <p className="card-text">Medicine Specialist</p>
                            <a href="#" className="btn btn-success">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;