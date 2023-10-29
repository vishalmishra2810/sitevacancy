import React from 'react';
import { OUR_CUSTOMER_SECTION } from './constant';
import { useRouter } from 'next/router';

const OurCustomer = () => {
    const router = useRouter();
    const openJobDetails = (item: string) => {
        router.push({
            pathname: '/job-list',
            query: { cName: item }
        });
    };
    return (
        <div className="relative font-inter antialiased">
            <main className="relative w-full min-h-[200px] flex flex-col justify-center bg-slate-900 overflow-hidden">
                <div className="w-full mx-auto">
                    <div className="text-center">
                        <div className="w-full inline-flex flex-nowrap overflow-hidden animate-infinite-scroll">
                            <ul className="flex items-center gap-8 justify-center md:justify-start">
                                {OUR_CUSTOMER_SECTION?.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            openJobDetails(item);
                                        }}
                                        className="
                                    text-white text-[36px] font-bold font-OpenSans cursor-pointer
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
