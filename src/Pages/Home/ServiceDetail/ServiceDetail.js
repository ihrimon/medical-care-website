import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className="my-5 border p-5">
            <h2 className="text-center">Service Details of {serviceId}.</h2>
        </div>
    );
};

export default ServiceDetail;