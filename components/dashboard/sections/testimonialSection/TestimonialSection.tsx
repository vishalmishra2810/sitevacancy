import React, { useState } from 'react';
export default function TestimonialSection() {
    const [testimonialActive, setTestimonialActive] = useState(1);
    const testimonials = [
        {
            name: 'John Doe',
            role: 'CEO, ABC Inc.',
            content:
                'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
        },
        {
            name: 'Winter Doe',
            role: 'CTO, XYZ Corp.',
            content:
                'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User-generated content in real-time will have multiple touchpoints for offshoring.'
        },
        {
            name: 'John Wick',
            role: 'Product Manager, Fake Corp.',
            content:
                'Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'
        }
    ];
    return (
        <div className="w-[var(--max-width)] mx-auto my-[60px]">
            <div className="container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
                <div className="relative w-full py-2 md:py-24 bg-primaryRed md:w-1/2 flex flex-col item-center justify-center">
                    {/* Your existing content */}
                </div>
                <div className="bg-gray-100 md:w-1/2">
                    <div className="flex flex-col h-full relative">
                        <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">{/* Your SVG icon */}</div>
                        <div className="h-full relative z-10">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl"
                                    style={{ display: testimonialActive === index + 1 ? 'block' : 'none' }}
                                >
                                    {testimonial.content}
                                </div>
                            ))}
                        </div>
                        <div className="flex my-4 justify-center items-center">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setTestimonialActive(index + 1)}
                                    className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${
                                        testimonialActive === index + 1
                                            ? 'h-16 w-16 bg-indigo-600 text-white'
                                            : 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600'
                                    }`}
                                >
                                    {testimonials[index].name.charAt(0)}
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="text-center"
                                    style={{ display: testimonialActive === index + 1 ? 'block' : 'none' }}
                                >
                                    <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                                        {testimonial.name}
                                    </h2>
                                    <small className="text-gray-500 text-xs md:text-sm truncate">
                                        {testimonial.role}
                                    </small>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
