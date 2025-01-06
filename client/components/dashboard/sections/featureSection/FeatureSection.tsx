import React from 'react';
import feature from '../../../../assets/feature.png';
import Image from 'next/image';
import { FEATURE } from './constant';

function FeatureSection() {
    return (
        <div className="w-[var(--max-width)] mx-auto my-[62px] flex items-center gap-32">
            <div className="flex-[1.3]">
                <Image
                    src={feature}
                    alt="feature"
                    placeholder="blur"
                    className="oject-cover"
                    width={600}
                    height={650}
                />
            </div>
            <div className="flex-1">
                <h2 className="text-[36px] font-[800] font-OpenSans text-primaryBlack leading-[1.1]">
                    We are always here to help you
                </h2>
                <div className="flex flex-col gap-[42px] mt-[62px]">
                    {FEATURE?.map((item, index) => (
                        <div className="flex items-center gap-4" key={index}>
                            <div
                                className="flex-1 flex justify-center items-center h-[72px] rounded-[16px] shadow-input"
                                style={{ background: item?.color }}
                            >
                                <Image
                                    src={item.icon}
                                    alt="feature1"
                                    width={36}
                                    height={36}
                                    style={{
                                        filter: item?.hex_color
                                    }}
                                />
                            </div>
                            <div className="flex-[4.5]">
                                <h3 className="text-[20px] font-[600] font-Poppins text-primaryBlack">{item?.title}</h3>
                                <p className="text-[14px] font-[400] font-Poppins text-primaryBlack">
                                    {item?.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;
