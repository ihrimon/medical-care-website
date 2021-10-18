import React from 'react';

const Contact = () => {
    return (
        <div className="container w-50 border py-5 my-5">
            <h2>GET IN TOUCH</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis aliquam laudantium voluptatem. Quae iure amet obcaecati fugiat autem aperiam eaque nobis possimus doloremque voluptas provident odit, tenetur illum molestiae.</p>
            <div className="d-flex">
                <div className="col-lg-4 col-12">
                    {/* <img src={ } alt="" /> */}
                    <div>
                        <h5>Emergency Call</h5>
                        <p>+088-345-6789</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    {/* <img src={ } alt="" /> */}
                    <div >
                        <h5>Email Us</h5>
                        <p>+088-345-6789</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    {/* <img src={ } alt="" /> */}
                    <div>
                        <h5>Address</h5>
                        <p>123 street, California Hospital</p>
                    </div>
                </div>
            </div>
            <div className="border">
                <div >
                    <form class="row g-3">
                        <div class="col-auto">
                            <label for="staticEmail2" class="visually-hidden">Email</label>
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
                        </div>
                        <div class="col-auto">
                            <label for="inputPassword2" class="visually-hidden">Password</label>
                            <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;