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
        <div className=" container my-5">
            <h2 className="text-center">Choose Our Qualified Doctors.</h2>
            <div className="doctor-container">
                <div className="col">
                    <div className="card w-18rem p-3 d-flex flex-column align-items-center">
                        <img src={doctor1} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Jason Simpson</h5>
                            <p className="card-text">Neurologist</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-18rem p-3 d-flex flex-column align-items-center">
                        <img src={doctor2} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-18rem p-3 d-flex flex-column align-items-center">
                        <img src={doctor3} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-18rem p-3 d-flex flex-column align-items-center">
                        <img src={doctor4} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-18rem p-3 d-flex flex-column align-items-center">
                        <img src={doctor5} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-18rem p-3 d-flex flex-column align-items-center">
                        <img src={doctor6} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;