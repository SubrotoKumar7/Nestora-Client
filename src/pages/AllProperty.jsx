import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../components/Card';

const AllProperty = () => {
    const propertiesData = useLoaderData();
    return (
        <div className='w-11/12 mx-auto sec-gap'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className='heading font-heading'>Explore Exclusive Real Estate Listings</h1>
                <p>Handpicked properties with premium amenities, modern architecture, and unbeatable locations — find your next investment today.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7'>
                {
                    propertiesData.map(property => <Card key={property.id} property={property}></Card>)
                }
            </div>
        </div>
    );
};

export default AllProperty;