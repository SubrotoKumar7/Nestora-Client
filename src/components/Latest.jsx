import React from 'react';
import Card from './Card';
import { Link } from 'react-router';

const Latest = ({propertiesData}) => {
    const data = propertiesData.slice(0, 6);
    return (
        <div className='sec-gap w-11/12 mx-auto'>
            <h1 className='heading text-center text-primary'>Featured Real Estates</h1>
            <p className='text-secondary text-center mt-3'>Explore the latest properties added this week</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    data.map(property => <Card key={property.id} property={property}></Card>)  
                }
            </div>
            <div className='flex items-center justify-center mt-10'>
                <Link className='btn btn-primary' to={'/all-property'}>See All</Link>
            </div>
        </div>
    );
};

export default Latest;