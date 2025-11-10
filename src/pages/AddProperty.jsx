import React, { useState } from 'react';

const AddProperty = () => {

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        imageUrl: "",
        propertyType: "",
        buildYear: "",
        location: "",
        furnishing: "",
        price: "",
        agentImage: "",
        agentName: "",
        email: "",
        contact: "",
        description: "",
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Property Data:", formData);
    };
    

    return (
        <div className='sec-gap  bg-gray-100'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className='heading font-heading'>Sell or Rent Faster!</h1>
                <p>Post your property now and connect with verified buyers & tenants instantly.</p>
            </div>
            <div className="w-11/12 mx-auto min-h-scree flex justify-center items-start py-10">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                    <h2 className="text-2xl font-bold text-center mb-6">🏠 Add New Property</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block font-medium mb-1">Property Title</label>
                        <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. Luxury Apartment in Dhaka"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block font-medium mb-1">Category</label>
                        <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                        >
                        <option value="">Select Category</option>
                        <option>For Sale</option>
                        <option>For Rent</option>
                        <option>Lease</option>
                        </select>
                    </div>

                    {/* Property Image URL */}
                    <div>
                        <label className="block font-medium mb-1">Property Image URL</label>
                        <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="https://example.com/property.jpg"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                        />
                    </div>

                    {/* Property Type & Build Year */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="block font-medium mb-1">Property Type</label>
                        <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        >
                            <option value="">Select Type</option>
                            <option>Apartment</option>
                            <option>House</option>
                            <option>Commercial</option>
                            <option>Land</option>
                        </select>
                        </div>
                        <div>
                        <label className="block font-medium mb-1">Build Year</label>
                        <input
                            type="number"
                            name="buildYear"
                            value={formData.buildYear}
                            onChange={handleChange}
                            placeholder="e.g. 2020"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block font-medium mb-1">Location</label>
                        <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Gulshan, Dhaka"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                        />
                    </div>

                    {/* Furnishing */}
                    <div>
                        <label className="block font-medium mb-1">Furnishing</label>
                        <select
                        name="furnishing"
                        value={formData.furnishing}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                        <option value="">Select Option</option>
                        <option>Furnished</option>
                        <option>Semi-Furnished</option>
                        <option>Unfurnished</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block font-medium mb-1">Price (BDT)</label>
                        <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="e.g. 2500000"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                        />
                    </div>

                    {/* Agent Info */}
                    <h3 className="text-lg font-semibold mt-6">Agent Information</h3>

                    <div>
                        <label className="block font-medium mb-1">Agent Image URL</label>
                        <input
                        type="text"
                        name="agentImage"
                        value={formData.agentImage}
                        onChange={handleChange}
                        placeholder="https://example.com/agent.jpg"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="block font-medium mb-1">Agent Name</label>
                        <input
                            type="text"
                            name="agentName"
                            value={formData.agentName}
                            onChange={handleChange}
                            placeholder="e.g. Rishi Kumar"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                        </div>
                        <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. rishi@gmail.com"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Contact Number</label>
                        <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="e.g. +8801XXXXXXXXX"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-medium mb-1">Property Description</label>
                        <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Write a detailed description about the property..."
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="text-center pt-4">
                        <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
                        >
                        Post Property
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;