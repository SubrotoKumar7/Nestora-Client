import React from 'react';

const CardSkeleton = () => {
    return (
        <div className="p-2 bg-base-100 shadow-2xl rounded animate-pulse">
            <div className="w-full md:h-[300px] h-[200px] bg-gray-300 rounded"></div>

            <div className="mt-3 space-y-3">
                <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>

                <div className="h-5 bg-gray-300 rounded w-24"></div>

                <div className="h-4 bg-gray-300 rounded w-32"></div>

                <div className="h-4 bg-gray-300 rounded w-40"></div>

                <div className="h-4 bg-gray-300 rounded w-36"></div>

                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>

                <div className="h-10 bg-gray-300 rounded w-full"></div>
            </div>
        </div>
    );
};

export default CardSkeleton;
