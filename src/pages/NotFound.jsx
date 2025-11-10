import React from 'react';
import { Link } from 'react-router';
import notFound from '../assets/not-found.png';

const NotFound = () => {
    return (
        <div className='h-screen grid place-items-center bg-base-100'>
            <div className='text-center'>
                <img className='mx-auto w-[250px]' src={notFound} alt="building image" />
                <h2 className='text-3xl font-bold text-primary'>404</h2>
                <h1 className='text-4xl my-5 font-semibold text-primary font-heading'>Opps! Page Not Found</h1>
                <Link to={'/'} className='btn btn-secondary'>Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;