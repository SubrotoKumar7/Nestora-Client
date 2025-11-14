import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../components/Card';

const AllProperty = () => {
    const propertiesData = useLoaderData();
    const [search, setSearch] = useState('');


    const filterProperty = propertiesData.filter((property) =>
        property.name.toLowerCase().includes(search.toLowerCase()) ||
        property.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='w-11/12 mx-auto sec-gap'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className='heading font-heading'>Explore Exclusive Real Estate Listings</h1>
                <p>Handpicked properties with premium amenities, modern architecture, and unbeatable locations — find your next investment today.</p>
            </div>
            <div>
                <div className="relative m-2 text-center w-full sm:w-auto md:px-20 flex justify-center sm:justify-end">
                <input
                    type="text"
                    placeholder="Search Properties ....."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[80%] mx-auto sm:w-62 md:w-86 px-6 py-2 pr-10 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                    />                    
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7'>
                {
                    
                    filterProperty.map(property => <Card key={property._id} property={property}></Card>)
                }
            </div>
        </div>
    );
};

export default AllProperty;