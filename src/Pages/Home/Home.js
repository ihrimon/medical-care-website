import React from 'react';
import Banner from './Banner/Banner';
import FindDoctors from './Doctors/FindDoctors';
import Faqs from './FAQ\'s/Faqs';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FindDoctors></FindDoctors>
            <Faqs></Faqs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;