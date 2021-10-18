import React from 'react';
import './Service.css'

const Service = (props) => {
    const { title, icon, description } = props.service
    return (
        <div className="d-flex card mx-3 my-3 align-items-center text-center service-card">
            <div>
                <img src={icon} className="card-img-top my-4" alt="" />
            </div>

            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text mb-3">{description}</p>
            </div>
        </div>
    );
};

export default Service;