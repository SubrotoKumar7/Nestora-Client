import React from "react";
import { Link } from "react-router";

const fakeProperties = [
    {
        id: 1,
        name: "Spacious 2BHK Apartment",
        category: "Apartment",
        price: 200000,
        location: "Dhaka, Bangladesh",
        postedDate: "2023-10-15",
    },
    {
        id: 2,
        name: "Modern Studio in the City",
        category: "Studio",
        price: 150000,
        location: "Chittagong, Bangladesh",
        postedDate: "2023-09-22",
    },
    {
        id: 3,
        name: "Luxury Villa with Garden",
        category: "Villa",
        price: 500000,
        location: "Sylhet, Bangladesh",
        postedDate: "2023-10-05",
    },
    {
        id: 4,
        name: "Cozy 1BHK for Rent",
        category: "Apartment",
        price: 80000,
        location: "Rajshahi, Bangladesh",
        postedDate: "2023-08-30",
    }
];

const MyProperties = () => {
    return (
        <div className="w-11/12 mx-auto sec-gap">
            <div className='text-center space-y-2 mb-10'>
                <h1 className='heading font-heading'>My Properties</h1>
                <p>Manage your property listings in one place</p>
                <p className="text-sm text-gray-500">View, update, or delete your properties as needed</p>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    fakeProperties.map((property) => (
                    <div key={property.id} className="bg-white rounded-lg shadow-lg p-3 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold text-gray-800">{property.name}</h3>
                        <p className="text-sm text-gray-600">{property.category}</p>
                        <p className="mt-2 text-lg font-bold text-green-600">${property.price}</p>
                        <p className="text-sm text-gray-500">{property.location}</p>
                        <p className="text-xs text-gray-400 mt-1">{new Date(property.postedDate).toLocaleDateString()}</p>

                        <div className="flex justify-between items-center mt-4">
                            <Link to={`/details/${property.id}`} className="btn btn-sm  btn-secondary text-white hover:underline text-sm">View Details</Link>

                            <div className="flex space-x-2">
                                <button className="hover:cursor-pointer border p-1 rounded text-yellow-500 hover:text-yellow-400 text-sm">Update</button>
                                <button className="hover:cursor-pointer border p-1 rounded text-red-500 hover:text-red-400 text-sm">Delete</button>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyProperties;
