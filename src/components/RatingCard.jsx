import React from "react";
import { Link } from "react-router";

const ReviewCard = ({ data }) => {
    const { reviewerName, reviewerEmail, photoURL, productRating, review, productId } = data;

    return (
        <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-between rounded overflow-hidden shadow-lg p-4 bg-white hover:shadow-2xl duration-300">
            <div>
                <div className="flex items-center space-x-4">
                    <img
                    src={photoURL}
                    alt={reviewerName}
                    className="md:w-20 md:h-20 w-15 h-15 rounded-full object-cover"
                    />
                    <div>
                    <h2 className="font-bold text-2xl">{reviewerName}</h2>
                    <p className="text-sm text-gray-500">{reviewerEmail}</p>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                        <svg
                        key={index}
                        className={`w-10 h-10 ${
                            index < productRating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10 15l-3.176 2.55 1.197-4.118-3.276-2.608 4.15-.34L10 5l1.105 4.144 4.15.34-3.276 2.608 1.197 4.118L10 15z"
                            clipRule="evenodd"
                        />
                        </svg>
                    ))}
                    </div>
                    <p className="text-gray-700 mt-2">{review}</p>
                </div>
            </div>
            <div>
                <Link to={`/details/${productId}`} className="btn btn-primary">View Properties</Link>
            </div>
        </div>
    );
};

export default ReviewCard;
