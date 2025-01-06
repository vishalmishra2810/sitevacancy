import React from 'react';
import Image from 'next/image';
import { HOW_TO_APPLY } from './constant';

function ApplySections() {
    return (
        <div className="w-[var(--max-width)] my-[64px] mx-auto">
            <div className="flex items-center justify-center flex-col">
                <p className="text-[24px] text-primaryRed font-[800] font-Roboto">How to Apply</p>
                <h2 className="text-[46px] text-primaryBlack font-[800] font-OpenSans text-center mt-[6px]">
                    Follow Easy 4 Steps
                </h2>
                <p className="text-[18px] text-center font-Roboto font-[500] mt-[24px]">
                    You can apply for a job by follow these steps below <br /> and get your dream job. <br />
                </p>
            </div>
            <div className="py-[62px] flex items-center justify-between">
                {HOW_TO_APPLY.map((item, index) => (
                    <div className="relative w-[250px] h-[250px] slow-transition" key={index}>
                        <div
                            className="absolute top-[-3px] left-[-3px] z-[2] w-[80px] h-[80px] border-t-[3px] border-l-[3px] rounded-tl-[48px] apply-section-shadow bg-white"
                            style={{ border: '3px solid ' + item.color }}
                        ></div>
                        <div className="absolute w-[250px] z-[4] h-[250px] p-8 rounded-[48px] apply-section-shadow bg-white">
                            <Image
                                src={item?.image}
                                alt="search"
                                width={52}
                                height={52}
                                style={{ filter: item.hex_color }}
                                className="mt-2"
                            />
                            <h3
                                className={`text-[22px] text-primaryBlack font-[800] text-center mt-[12px] font-OpenSans`}
                            >
                                {item?.title}
                            </h3>
                            <p className="text-[16px] text-primaryBlack font-[400] font-Roboto text-center mt-[12px]">
                                {item?.description}
                            </p>
                        </div>

                        <div
                            className="absolute right-[-3px] bottom-[-3px] z-[1] w-[80px] h-[80px] border-r-3 border-b-3 rounded-br-[48px] apply-section-shadow bg-white"
                            style={{ border: '3px solid ' + item.color }}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ApplySections;
