import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [serviceDetail, setServiceDetail] = useState([])
    const [singleServiceInfo, setSingleServiceInfo] = useState({})

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, [])

    useEffect(() => {
        const foundService = serviceDetail.find(service => service.id === serviceId)
        setSingleServiceInfo(foundService);
    }, [serviceDetail])

    return (
        <div>
            <h2 className="text-center text-success my-5">Information of {serviceId}</h2>
            <h2 className="mt-3 mb-5">{singleServiceInfo?.title}</h2>
            <div className="container my-5">
                <img src={singleServiceInfo?.img} alt="..." />
                <p className="text-start">{singleServiceInfo?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;