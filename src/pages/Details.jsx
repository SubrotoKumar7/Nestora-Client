import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const properties = useLoaderData();
    const param = useParams();
    const filterData = properties.find(property => property.id == param.id);
    const {agentContact, agentEmail, agentImage, agentName, category, createdAt, description, furnishing, image, location, name, price, propertyType, rating, status, yearBuilt } = filterData;
    return (
        <div className='w-11/12 mx-auto sec-gap'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                <div>
                    <img src={image} alt={name + ' images'} />
                </div>
                <div className='space-y-2.5'>
                    <h1 className='text-4xl font-bold'>{name}</h1>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Property Type:</strong> {propertyType}</p>
                    <p><strong>Status:</strong> {status}</p>
                    <p><strong>Property Build Year:</strong> {yearBuilt}</p>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Rating:</strong> {rating}</p>
                    <p><strong>furnishing:</strong> {furnishing}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Date:</strong> {createdAt}</p>
                    <p><button className='btn btn-primary'>Buy Properties</button></p>
                </div>
            </div>
            <div className='py-5'>
                <p><strong>Description:</strong> {description}</p>
            </div>
            <div className='my-10'>
                <h1 className='text-2xl font-bold my-5'>Agent Information</h1>
                <div className='flex gap-3 '>
                    <img src={agentImage} alt={agentName + ' images'} />
                    <div>
                        <h2 className='text-lg font-medium'>{agentName}</h2>
                        <p><strong>Email:</strong> {agentEmail}</p>
                        <p><strong>Contact:</strong> {agentContact}</p>
                        <p><button className='btn btn-primary'>Connect</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;