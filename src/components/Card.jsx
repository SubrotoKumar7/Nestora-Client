import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router';

const Card = ({property}) => {
    const {_id, category, createdAt, description, image, location, name, price} = property;
    return (
        <div className='p-2 bg-white shadow-2xl rounded hover:scale-105'>
            <img src={image} alt="property images" />
            <div className='mt-3 space-y-2'>
                <h1 className='text-center font-semibold text-2xl'>{name}</h1>
                <div className="badge badge-accent">
                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle></g></svg>
                    {category}
                </div>
                <p className='flex items-center gap-2'><TbCurrencyTaka className='text-xl' /> {price}</p>
                <p className='flex items-center gap-2'><FaLocationDot /> {location}</p>
                <p className='flex items-center gap-2'><FaCalendarAlt /> {createdAt}</p>
                <p>{description && description.length > 70 ? description.slice(0, 70) + "..." : description}</p>
                <Link className='btn btn-primary w-full' to={`/details/${_id}`}>Learn More</Link>
            </div>
        </div>
    );
};

export default Card;