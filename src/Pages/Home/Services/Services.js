import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="#services">
            <h2 className="text-center mt-5">Explore our services</h2>
            <div className="container">
                <div className="services">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <div className="d-flex justify-content-center my-5">
                    <Link to="/services"><button className="btn btn-outline-success rounded-0">See more Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;