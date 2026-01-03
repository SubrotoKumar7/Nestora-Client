import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import { Link } from 'react-router';

const Carousel = () => {

const sliderData = [
    {
        id: 1,
        title: "Luxurious Family Home",
        subtitle: "Experience comfort and elegance in the heart of the city",
        image: slide1,
    },
    {
        id: 2,
        title: "Modern Apartment",
        subtitle: "City living with stunning views and modern amenities",
        image: slide2
    },
    {
        id: 3,
        title: "Architectural Masterpieces",
        subtitle: "Homes designed to perfection with cutting-edge architecture and luxury finishes",
        image: slide3,
    },
];

    
    return (
        <div className='relative'>
            <Swiper autoplay={{delay: 3000}} speed={1000} loop effect='fade'  modules={[Autoplay]}>
                {
                    sliderData.map(slide => 
                    <SwiperSlide key={slide.id}>
                        <div className='relative h-[90vh] text-center'>
                            <img className='absolute w-full h-full' src={slide.image} alt="slider images" />
                            <div className='absolute w-full h-full z-10 bg-black/40'></div>
                            <div className='absolute w-full h-full text-white z-20 top-[45%]'>
                                <h1 className='text-center text-4xl md:text-6xl font-bold'>{slide.title}</h1>
                                <p className='mt-3 text-lg'>{slide.subtitle}</p>
                                <Link className='btn btn-primary mt-3' to={'/all-property'}>Explore Property</Link>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Carousel;