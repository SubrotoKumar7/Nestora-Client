import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="bg-primary text-primary-content py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    About Nestora
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                    Your trusted partner in modern real estate solutions
                </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-base-content">
                    Who We Are
                    </h2>
                    <p className="text-base-content/80 leading-relaxed mb-4">
                    <span className="font-semibold">Nestora</span> is a modern real
                    estate web application designed to provide a smooth and intuitive
                    experience for exploring properties, viewing details, and
                    connecting with agents.
                    </p>
                    <p className="text-base-content/80 leading-relaxed mb-4">
                    Built with powerful technologies like{" "}
                    <span className="font-medium">
                        React, TailwindCSS, DaisyUI, Firebase
                    </span>
                    , Nestora delivers fast performance and a responsive interface in
                    both light and dark modes.
                    </p>
                    <p className="text-base-content/80 leading-relaxed">
                    Whether you’re buying, renting, or simply exploring, Nestora helps
                    you make confident real estate decisions.
                    </p>

                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h3 className="card-title text-2xl">
                        Why Choose Nestora?
                    </h3>
                    <ul className="space-y-3 text-base-content/80">
                        <li>🏠 Easy property browsing</li>
                        <li>📍 Detailed property listings</li>
                        <li>🤝 Direct agent communication</li>
                        <li>⚡ Fast & responsive UI</li>
                        <li>🔒 Secure authentication</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;