import React from 'react';
import { OUR_CUSTOMER_SECTION } from './constant';

const OurCustomer = () => {
    return (
        <div className="relative font-inter antialiased">
            <main className="relative w-full min-h-[300px] flex flex-col justify-center bg-slate-900 overflow-hidden">
                <div className="w-full mx-auto">
                    <div className="text-center">
                        <div className="w-full inline-flex flex-nowrap overflow-hidden animate-infinite-scroll">
                            <ul className="flex items-center gap-8 justify-center md:justify-start">
                                {OUR_CUSTOMER_SECTION?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="
                                    text-white text-[36px] font-semibold font-OpenSans 
                                    "
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OurCustomer;
