import React from 'react';
import style from './CategorySection.module.scss';
import { CATEGORY_SECTION } from './constant';
import { useRouter } from 'next/router';
import { URLPaths } from '@/utils/constant';

function CategorySection() {
    const router = useRouter();
    const openJobCategory = (category: string) => {
        const query = category ? `?category=${category}` : '';
        router.push(URLPaths.JOB_LIST + `${query}`);
    };
    return (
        <div className="w-[var(--max-width)] mx-auto my-[62px]">
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-[36px] font-[800] font-OpenSans text-primaryBlack">Browse Job Categories</h2>
                <p className="text-[16px] text-center font-Roboto font-[400] mt-[24px]">
                    Explore a wide range of job categories to discover opportunities that <br />
                    match your skills and interests.
                </p>
                <div className="flex flex-wrap gap-6 mt-[52px]">
                    {CATEGORY_SECTION?.map((item, index) => (
                        <div
                            className="flex w-[256px] flex-col items-center rounded-[20px] justify-center gap-2 apply-section-shadow slow-transition"
                            key={index}
                            onClick={() => {
                                openJobCategory(item?.title);
                            }}
                        >
                            <h3 className="text-[16px] text-primaryBlack font-[700] font-OpenSans text-center mt-[24px]">
                                {item?.title}
                            </h3>
                            <p className="text-[14px] text-primaryBlack font-[400] text-center mb-[24px] font-Poppins">
                                {item?.description}+ Posted New Jobs
                            </p>
                            <div
                                className="h-[24px] w-full rounded-bl-[20px] rounded-br-[20px]"
                                style={{
                                    background: item?.color
                                }}
                            ></div>
                        </div>
                    ))}
                    <div
                        className="flex w-[256px] border border-primaryRed flex-col items-center rounded-[20px] justify-center gap-8 apply-section-shadow cursor-pointer font-OpenSans font-[700] text-[20px] slow-transition"
                        onClick={() => {
                            openJobCategory('');
                        }}
                    >
                        100+ More Category
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategorySection;
