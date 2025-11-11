import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';

const MyRatings = () => {

    const [rating, setRating] = useState(4)

    return (
        <div className='w-11/12 mx-auto sec-gap'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className='heading font-heading'>My Property Ratings</h1>
                <p>Browse through reviews from verified users and get a closer look at the experiences shared by others on your property listings.</p>
            </div>
            <div className='mt-5 grid grid-cols-1 gap-7'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 py-5 px-2 hover:shadow-2xl bg-white duration-200 shadow-xl rounded'>
                        <img className='w-full md:col-span-1' src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" alt="property images" />
                        <div className='md:col-span-3'>
                            <h1 className='text-2xl font-semibold font-heading'>Riverside Dream Home</h1>
                            <p className='text-gray-500'>Reviewed by <span>John Doe</span></p>
                            <div className='py-2'>
                               {/* rating */}
                                <Rating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
                            </div>
                            <p> Wake up to the sound of the river and enjoy sunset views from your private balcony. This 2-story home offers open living spaces, a rooftop terrace, and large windows for natural light.</p>
                            <p className='text-gray-500 py-2 text-sm'>8/11/2025</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default MyRatings;