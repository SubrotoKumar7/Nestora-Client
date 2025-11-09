import React from 'react';
import Carousel from '../components/Carousel';
import Latest from '../components/Latest';
import { useLoaderData } from 'react-router';
import ChooseUs from '../components/ChooseUs';
import Testimonial from '../components/Testimonial';

const Home = () => {
    const propertiesData = useLoaderData();
    return (
        <div>
            <Carousel></Carousel>
            <Latest propertiesData={propertiesData}></Latest>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;