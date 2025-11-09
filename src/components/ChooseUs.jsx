import React from "react";

const features = [
    {
        icon: "https://img.icons8.com/color/96/000000/verified-account.png",
        title: "Trusted & Reliable",
        description:
        "We prioritize transparency and reliability, ensuring every property meets your expectations.",
    },
    {
        icon: "https://img.icons8.com/color/96/000000/price-tag.png",
        title: "Best Deals",
        description:
        "We offer competitive pricing and exclusive properties that match your budget and lifestyle.",
    },
    {
        icon: "https://img.icons8.com/color/96/000000/customer-support.png",
        title: "24/7 Support",
        description:
        "Our professional team is always available to guide you through the buying or renting process.",
    },
    {
        icon: "https://img.icons8.com/fluency/96/map-marker--v1.png",
        title: "Prime Locations",
        description:
        "We provide properties in the most desirable areas, ensuring convenience, connectivity, and lifestyle.",
    },
];

const ChooseUs = () => {
    return (
        <div className="w-11/12 mx-auto sec-gap">
            <div className='text-center space-y-2 mb-10'>
                <h1 className='heading font-heading'>Why Choose Us</h1>
                <p>Discover the reasons why we are the preferred choice for your real estate needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    features.map((features, index) => 
                    <div key={index} className="bg-white grid place-items-center p-10 shadow-2xl rounded text-center">
                        <img src={features.icon} alt="icon" />
                        <h1 className="font-semibold text-2xl">{features.title}</h1>
                        <p>{features.description}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ChooseUs;
