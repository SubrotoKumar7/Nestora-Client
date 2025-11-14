import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import RatingCard from '../components/RatingCard';
import Loader from '../components/Loader';

const MyRatings = () => {

    const {user} = useAuth();
    const [review, setReview] = useState(null);

    useEffect(()=> {
        fetch(`http://localhost:3000/reviews?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> {
            setReview(data);
        })
    }, [user.email])


    if(review === null){
        return <Loader></Loader>;
    }

    return (
        <div className='w-11/12 mx-auto sec-gap'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className='heading font-heading'>My Property Ratings</h1>
                <p>Browse through reviews from verified users and get a closer look at the experiences shared by others on your property listings.</p>
            </div>
            <div className='mt-5 grid grid-cols-1 gap-7'>
                {
                    review.length === 0 ?
                    (
                        <div className="col-span-full my-[10vh] text-center text-3xl font-bold">
                            No Rating yet
                        </div>
                    )
                    :
                    review.map((data, i)=> <RatingCard key={i} data={data}></RatingCard>)
                }
                    
            </div>
        </div>
    );
};

export default MyRatings;