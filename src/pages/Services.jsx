import React from 'react';
import { Link } from 'react-router';

const Services = () => {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="bg-primary text-primary-content py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Our Services
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                    Everything you need to make smart real estate decisions
                </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">🏠 Property Listings</h2>
                    <p className="text-base-content/80">
                        Browse a wide range of properties with detailed information,
                        images, pricing, and location details.
                    </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">🔍 Advanced Search</h2>
                    <p className="text-base-content/80">
                        Filter properties by location, price, category, and more to find
                        exactly what suits your needs.
                    </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">📍 Property Details</h2>
                    <p className="text-base-content/80">
                        View complete property details including amenities, photos, and
                        agent information.
                    </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">🤝 Agent Contact</h2>
                    <p className="text-base-content/80">
                        Connect directly with trusted agents for inquiries, visits, and
                        professional guidance.
                    </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">🔒 Secure Authentication</h2>
                    <p className="text-base-content/80">
                        Safe and secure user authentication powered by Firebase to
                        protect your data.
                    </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">⚡ Fast Performance</h2>
                    <p className="text-base-content/80">
                        Enjoy a smooth and responsive experience across all devices with
                        optimized performance.
                    </p>
                    </div>
                </div>
                </div>

                <div className="text-center mt-16">
                <h2 className="text-3xl font-bold mb-4 text-base-content">
                    Ready to Explore Properties?
                </h2>
                <p className="text-base-content/80 mb-6">
                    Start your journey with Nestora and find your perfect place today.
                </p>

                <Link className="btn btn-primary" to={'/all-property'}>Visit Property</Link>
                </div>
            </div>
            </div>
    );
};

export default Services;