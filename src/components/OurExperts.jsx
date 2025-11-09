import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

const agents = [
                {
                    name: "Olivia Carter",
                    role: "Senior Property Consultant",
                    image: "https://randomuser.me/api/portraits/women/65.jpg",
                    email: "olivia@nestora.com",
                },
                {
                    name: "Ethan Williams",
                    role: "Luxury Real Estate Specialist",
                    image: "https://randomuser.me/api/portraits/men/44.jpg",
                    email: "ethan@nestora.com",
                },
                {
                    name: "Sophia Brown",
                    role: "Investment Advisor",
                    image: "https://randomuser.me/api/portraits/women/46.jpg",
                    email: "sophia@nestora.com",
                },
                ];

const OurExperts = () => {
    return (
        <div className='w-11/12 mx-auto sec-gap'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className='heading font-heading'>Meet Our Expert Agents</h1>
                <p>Our professional team is here to help you find the perfect property with expert guidance and personalized service.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    agents.map((agent, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center p-6"
                    >
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-sm">
                        <img
                            src={agent.image}
                            alt={agent.name}
                            className="w-full h-full object-cover"
                        />
                        </div>
                        <h3 className="text-xl font-semibold mt-4 text-gray-800">{agent.name}</h3>
                        <p className="text-gray-500">{agent.role}</p>
                        <p className="text-blue-600 text-sm mt-2">{agent.email}</p>

                        <div className="flex justify-center gap-4 mt-4 text-gray-500 text-lg">
                        <Link to={'/'}><FaFacebook></FaFacebook></Link>
                        <Link to={'/'}><FaLinkedin></FaLinkedin></Link>
                        <Link to={'/'}><FaInstagram></FaInstagram></Link>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurExperts;