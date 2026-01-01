import React from 'react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Home Buyer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        feedback:
        "Finding my dream home was so easy with this agency. The team guided me through every step and made the process smooth and stress-free.",
    },
    {
        name: "Michael Smith",
        role: "Investor",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        feedback:
        "Excellent service and incredible property listings. Their advice helped me make smart investment decisions.",
    },
    {
        name: "Emma Williams",
        role: "Tenant",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        feedback:
        "The rental process was seamless. They provided all the details and made sure I felt confident in my choice.",
    },
    {
        name: "Maria Smith",
        role: "Investor",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        feedback:
        "Highly recommend this real estate company! They made everything smooth and stress-free.",
    },
];


const Testimonial = () => {
    return (
        <div className='w-11/12 mx-auto sec-gap'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className='heading font-heading'>What Our Clients Say</h1>
                <p>Our clients love our dedication to helping them find the perfect property.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                    testimonials.map((t, i) => 
                    <div key={i} className='text-center p-5 bg-base-100 shadow-2xl rounded'>
                        <img className='mx-auto w-20 h-20 bg-cover my-5 rounded-full' src={t.image} alt="reviews" />
                        <h1 className='text-2xl font-medium'>{t.name}</h1>
                        <p className='py-5'>''{t.feedback}''</p>
                        <p className='font-medium'>{t.role}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonial;