import React from 'react';
import Carousel from '../components/Carousel';
import Latest from '../components/Latest';
import { useLoaderData } from 'react-router';
import ChooseUs from '../components/ChooseUs';
import Testimonial from '../components/Testimonial';
import OurExperts from '../components/OurExperts';

const Home = () => {
    const propertiesData = useLoaderData();
    return (
        <div>
            <Carousel></Carousel>
            <Latest propertiesData={propertiesData}></Latest>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
            <OurExperts></OurExperts>
        </div>
    );
};

export default Home;