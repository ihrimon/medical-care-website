import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [serviceDetail, setServiceDetail] = useState([])
    const [singleServiceInfo, setSingleServiceInfo] = useState({})

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, [])

    useEffect(() => {
        const foundService = serviceDetail.find(service => service.id === serviceId)
        setSingleServiceInfo(foundService)
    }, [serviceDetail])

    return (
        <div>
            <h2 className="mt-3 mb-5">{singleServiceInfo?.name}</h2>
            <div className="container see-more">
                <img src={singleServiceInfo?.image} className="img-thumbnail w-50 me-3 mb-2" alt="..." />
                <p className="text-start">{singleServiceInfo?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;






/*

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Doctordetails = () => {
    const {id} = useParams();
    const [dtl,setdtl] = useState([]);

    useEffect(()=>{

        fetch('/service.json')
        .then(res => res.json())
        .then(data => setdtl(data));


    },[]);


    const fullDls = dtl?.find(Doctordetails => Doctordetails?.id == id);
    console.log(fullDls);
    return (




        <div class="card mb-3 max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={fullDls?.img}  alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{fullDls?.title}</h5>
                            <hr />
                            <p class="card-text">
                                {fullDls?.detalis}
                            </p>

                        </div>
                        </div>
                    </div>
        </div>
    );
};

export default Doctordetails; */