import React from 'react';
import Carousel from '../components/Carousel';
import Latest from '../components/Latest';
import ChooseUs from '../components/ChooseUs';
import Testimonial from '../components/Testimonial';
import OurExperts from '../components/OurExperts';
import useAxios from '../hooks/useAxios';
import { useQuery } from "@tanstack/react-query"

const Home = () => {
    const axiosInstance = useAxios();
    const {data: propertiesData = [], isLoading} = useQuery({
        queryKey: ['latest-property'],
        queryFn: async() => {
            const res = await axiosInstance.get('/latest-properties');
            return res.data;
        }
    })

    return (
        <div>
            <Carousel></Carousel>
            <Latest propertiesData={propertiesData} isLoading={isLoading}></Latest>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
            <OurExperts></OurExperts>
        </div>
    );
};

export default Home;