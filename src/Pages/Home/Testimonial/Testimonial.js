import React from 'react';
import img1 from '../../../images/patient-1.png';
import img2 from '../../../images/patient-2.png';
import img3 from '../../../images/patient-3.png';

const Testimonial = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center">Testimonial</h2>
            <div className="row row-cols-4 row-cols-lg-12 justify-content-center g-2 g-lg-5">
                <div className="col">
                    <div className="card w-18rem p-3 d-flex flex-column align-items-center">
                        <img src={img1} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-18rem p-3 d-flex flex-column align-items-center">
                        <img src={img2} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-18rem p-3 d-flex flex-column align-items-center">
                        <img src={img3} className="card-img-top w-50" alt="..." />
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

export default Testimonial;