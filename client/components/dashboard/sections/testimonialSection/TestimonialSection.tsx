import React, { useState } from 'react';

function TestimonialSection() {
    const [testimonialActive, setTestimonialActive] = useState(2);

    return (
        <div className="w-[var(--max-width)] mx-auto my-16 p-8">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700 leading-tight text-center">
                    What our customers are saying
                </h2>
                <p className="text-gray-600 text-center mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="flex flex-col items-center h-full relative">
                <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.560.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.400-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.330.358-.656.734-.909 1.162C3.219 8.33 3.020 8.778 2.810 9.221c-.190.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.400-1.091.692-.339.301-.748.562-1.05.944-.330.358-.656.734-.909 1.162C14.219 8.33 14.020 8.778 13.810 9.221c-.190.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                    </svg>
                </div>
                <div className="h-full relative z-10">
                    <div style={{ display: testimonialActive === 1 ? 'block' : 'none' }}>
                        <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                            approaches to corporate strategy foster collaborative thinking to further the overall value
                            proposition. Organically grow the holistic world view of disruptive innovation via workplace
                            diversity and empowerment.
                        </p>
                    </div>
                    <div style={{ display: testimonialActive === 2 ? 'block' : 'none' }}>
                        <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of
                            the day, going forward, a new normal that has evolved from generation X is on the runway
                            heading towards a streamlined cloud solution. User generated content in real-time will have
                            multiple touchpoints for offshoring.
                        </p>
                    </div>
                    <div style={{ display: testimonialActive === 3 ? 'block' : 'none' }}>
                        <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                            Override the digital divide with additional clickthroughs from DevOps. Nanotechnology
                            immersion along the information highway will close the loop on focusing solely on the bottom
                            line.
                        </p>
                    </div>
                </div>
                <div className="flex my-4 justify-center items-center">
                    <button
                        onClick={() => setTestimonialActive(1)}
                        className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${
                            testimonialActive !== 1
                                ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600'
                                : 'h-16 w-16 opacity-100 bg-indigo-600 text-white'
                        }`}
                    >
                        JD
                    </button>
                    <button
                        onClick={() => setTestimonialActive(2)}
                        className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-16 w-16 inline-block bg-indigo-600 rounded-full mx-2 ${
                            testimonialActive !== 2
                                ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600'
                                : 'h-16 w-16 opacity-100 bg-indigo-600 text-white'
                        }`}
                    >
                        WD
                    </button>
                    <button
                        onClick={() => setTestimonialActive(3)}
                        className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-16 w-16 inline-block bg-indigo-600 rounded-full mx-2 ${
                            testimonialActive !== 3
                                ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600'
                                : 'h-16 w-16 opacity-100 bg-indigo-600 text-white'
                        }`}
                    >
                        JW
                    </button>
                </div>
                <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
                    <div style={{ display: testimonialActive === 1 ? 'block' : 'none' }}>
                        <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">John Doe</h2>
                        <small className="text-gray-500 text-xs md:text-sm truncate">CEO, ABC Inc.</small>
                    </div>
                    <div style={{ display: testimonialActive === 2 ? 'block' : 'none' }}>
                        <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">Winter Doe</h2>
                        <small className="text-gray-500 text-xs md:text-sm truncate">CTO, XYZ Corp.</small>
                    </div>
                    <div style={{ display: testimonialActive === 3 ? 'block' : 'none' }}>
                        <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">John Wick</h2>
                        <small className="text-gray-500 text-xs md:text-sm truncate">Product Manager, Fake Corp.</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;
