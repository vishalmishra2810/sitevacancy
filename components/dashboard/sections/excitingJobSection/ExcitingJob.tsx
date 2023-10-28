import React, { useEffect, useRef } from 'react';
const ExcitingJob = () => {
    const logosRef = useRef(null);

    useEffect(() => {
        if (logosRef.current) {
            let ul: any = logosRef.current;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        }
    }, []);
    return (
        <div className="relative font-inter antialiased">
            <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
                <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                    <div className="text-center">
                        {/* Logo Carousel animation */}
                        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                            <ul
                                ref={logosRef}
                                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                            >
                                <li>
                                    <img
                                        src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
                                        alt="Facebook"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
                                        alt="Disney"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
                                        alt="Airbnb"
                                    />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg" alt="Apple" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg" alt="Spark" />
                                </li>
                                <li>
                                    <img
                                        src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
                                        alt="Samsung"
                                    />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg" alt="Quora" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg" alt="Sass" />
                                </li>
                            </ul>
                        </div>
                        {/* End: Logo Carousel animation */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ExcitingJob;
