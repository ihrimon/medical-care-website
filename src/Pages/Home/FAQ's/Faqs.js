import React from 'react';
import img from '../../../images/faq.png'

const Faqs = () => {
    return (
        <div className="container">
            <div className="text-center my-5">
                <h2 className="text-success">Frequently Asked Questions</h2>
                <p>Any question putting on your FAQ page on the tap navigation of your website, or place it on a pull-down menu under the Contact us section.</p>
            </div>

            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center pb-5 my-5">
                <div className="me-5 col-lg-5 col-12">
                    <img src={img} className='img-fluid' alt="" />
                </div>
                <div className="accordion col-lg-7 col-12 ms-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How do explain a problem to a doctor?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Home visit doctors are not some of the latest innovations. They have prevailed long before. And old fashion is coming back due to many reasons. We bring the quickest, most reliable medical service solution to every area in Dhaka. We have a major number of doctors in every part of Dhaka city ready to offer medical care at your home.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Can I talk to a doctor online?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                It can be daunting to visit a doctor for symptoms of what might be an undiagnosed medical problem. Patients often struggle to adequately explain their symptoms during the brief medical interview, which is an important component of helping the physician
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Is it OK to switch doctors?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Home visit doctors are not some of the latest innovations. They have prevailed long before. And old fashion is coming back due to many reasons. We bring the quickest, most reliable medical service solution to every area in Dhaka. We have a major number of doctors in every part of Dhaka city ready to offer medical care at your home.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How do I get doctor in trouble?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                To say home doctor service is a doctor visit service at home on demand would not be wrong. In-home doctor service is a service when the doctor visits you at home when you are unable to or prefer not to visit a doctor personally.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How can I contact with a Emergency Doctor?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                It can be daunting to visit a doctor for symptoms of what might be an undiagnosed medical problem. Patients often struggle to adequately explain their symptoms during the brief medical interview, which is an important component of helping the physician.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;