import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { title, img, description } = props.service
    return (
        <div className="d-flex card mx-3 my-3 align-items-center text-center service-card">
            <div>
                <img src={img} className="card-img-top my-4" alt="" />
            </div>

            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text mb-3">{description}</p>
            </div>
            <Link to={`/service-detail/${title}`}>
                <button className="btn btn-success rounded-0 mb-4">More Details</button>
            </Link>
        </div>
    );
};

export default Service;