import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Rating } from '@smastrom/react-rating';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import ReviewCard from '../components/ReviewCard';

const Details = () => {
    
    const {user} = useAuth();
    const {id: productId} = useParams();
    const [reviews, setReviews] = useState([]);
    const [avgRating, setAvgRating] = useState(0);

    useEffect(()=> {
        fetch(`http://localhost:3000/reviews/${productId}`)
        .then(res=> res.json())
        .then(data=> {
            setReviews(data)
            })
    }, [productId])

    useEffect(()=> {
        const calculateAverageRating = (reviews) => {
        const totalRating = reviews.reduce((sum, review) => sum + review.productRating, 0);

        return (totalRating / reviews.length);
        };

        const averageRating = Math.round(calculateAverageRating(reviews));
        setAvgRating(averageRating);

    }, [reviews])


    const properties = useLoaderData();
    const { 
        agentContact, 
        agentEmail, 
        agentImage, 
        agentName, 
        category, 
        createdAt, 
        description, 
        furnishing, 
        image, 
        location, 
        name, 
        price, 
        propertyType, 
        status, 
        yearBuilt 
    } = properties;


    const [productRating, setProductRating] = useState(0);
    const [review, setReview] = useState('');

    const ratingInfo = {
        reviewerName: user.displayName,
        reviewerEmail: user.email,
        photoURL: user.photoURL,
        productRating,
        review,
        productId
    }


    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if(!productRating){
            return toast.warn("Please fill the rate star");
        }
        if(!review){
            return toast.warn("Please fill the review box");
        }

        setReviews([...reviews, ratingInfo]);
        fetch(`http://localhost:3000/reviews`,{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ratingInfo)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
                setProductRating(0);
                setReview('');
                ratingInfo._id = data.insertedId;
                Swal.fire({
                position: "top",
                icon: "success",
                title: "Your reviews has been saved",
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
    };

    return (
        <div className="w-11/12 mx-auto sec-gap">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                    <img src={image} alt={name + ' images'} />
                </div>
                <div className="space-y-2.5">
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Property Type:</strong> {propertyType}</p>
                    <p><strong>Status:</strong> {status}</p>
                    <p><strong>Property Build Year:</strong> {yearBuilt}</p>
                    <p><strong>Location:</strong> {location}</p>

                    <div className='flex gap-2'><strong>Rating:</strong> 
                        <Rating style={{ maxWidth: 100 }} readOnly value={avgRating} />
                    </div>
                    <p><strong>Furnishing:</strong> {furnishing}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Date:</strong> {createdAt}</p>
                    <p><button className="btn btn-primary">Buy Properties</button></p>
                </div>
            </div>

            <div className="py-5">
                <p><strong>Description:</strong> {description}</p>
            </div>

            <div className="my-10">
                <h1 className="text-2xl font-bold my-5">Agent Information</h1>
                <div className="flex gap-3">
                    <img className="w-30 h-30" src={agentImage} alt={agentName + ' images'} />
                    <div>
                        <h2 className="text-lg font-medium">{agentName}</h2>
                        <p><strong>Email:</strong> {agentEmail}</p>
                        <p><strong>Contact:</strong> {agentContact}</p>
                        <p><button className="btn btn-primary">Connect</button></p>
                    </div>
                </div>
            </div>

            <div className="my-10">
                <h1 className="text-2xl font-bold my-5">Ratings & Reviews</h1>
                <div>
                    <Rating style={{ maxWidth: 200 }} value={productRating} onChange={setProductRating} />
                </div>

                <div className="mt-5">
                    <h3 className="font-medium">Add your review:</h3>
                    <textarea 
                        className="w-full p-2 mt-2 border border-gray-300 rounded" 
                        placeholder="Write a short review..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <button className="btn btn-primary mt-3" onClick={handleReviewSubmit}>Submit Review</button>
                </div>

                <div className="mt-15">
                    <h3 className="font-medium heading heading-font">All Reviews:</h3>
                    <div className='grid grid-cols-1 gap-7 mt-5'>
                        {
                            reviews.map((data, i) => <ReviewCard key={i} data={data}></ReviewCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
