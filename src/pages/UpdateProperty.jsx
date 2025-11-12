import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const UpdateProperty = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://nestora-server-d3tjq901g-subroto-kumars-projects.vercel.app/properties/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    imageUrl: "",
    propertyType: "",
    buildYear: "",
    location: "",
    furnishing: "",
    price: "",
    agentImage: user.photoURL,
    agentName: user.displayName,
    agentEmail: user.email,
    agentContact: "",
    description: "",
    status: "Available",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://nestora-server-d3tjq901g-subroto-kumars-projects.vercel.app/properties/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your property has been update",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/details/${id}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sec-gap  bg-gray-100">
      <div className="text-center space-y-2 mb-10">
        <h1 className="heading font-heading">Update Property Details</h1>
        <p>
          Edit the information for your property listing to keep it up-to-date
          and accurate.
        </p>
      </div>
      <div className="w-11/12 mx-auto min-h-screen flex justify-center items-start py-12">
        <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Property Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Title
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Luxury Apartment in Dhaka"
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/property.jpg"
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            {/* Property Type & Build Year */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Build Year
                </label>
                <input
                  type="number"
                  name="buildYear"
                  value={formData.buildYear}
                  onChange={handleChange}
                  placeholder="e.g. 2020"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Gulshan, Dhaka"
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            {/* Furnishing */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Furnishing
              </label>
              <select
                name="furnishing"
                value={formData.furnishing}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              >
                <option value="">Select Option</option>
                <option>Furnished</option>
                <option>Semi-Furnished</option>
                <option>Unfurnished</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (BDT)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g. 2500000"
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            {/* Agent Info */}
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              Agent Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Agent Image URL
              </label>
              <input
                type="text"
                name="agentImage"
                value={formData.agentImage}
                onChange={handleChange}
                placeholder="https://example.com/agent.jpg"
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agent Name
                </label>
                <input
                  type="text"
                  name="agentName"
                  readOnly
                  value={formData.agentName}
                  onChange={handleChange}
                  placeholder="e.g. Rishi Kumar"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agent Email
                </label>
                <input
                  type="email"
                  name="agentEmail"
                  readOnly
                  value={formData.agentEmail}
                  onChange={handleChange}
                  placeholder="e.g. rishi@gmail.com"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                name="agentContact"
                value={formData.agentContact}
                onChange={handleChange}
                placeholder="e.g. +8801XXXXXXXXX"
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            {/* Property Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Write a detailed description about the property..."
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="btn btn-primary text-white text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Update Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProperty;
