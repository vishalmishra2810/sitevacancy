import React from 'react';
import explore from '../../../../assets/explore.png';
import Image from 'next/image';
import Link from 'next/link';
import { URLPaths } from '@/utils/constant';

function ExploreSection() {
    return (
        <div className="w-[var(--max-width)] mx-auto my-[60px]">
            <div className="flex gap-[52px] justify-between">
                <div className="flex-1 bg-white p-[16px] border-1 border-[#fa4f08] rounded-[24px]">
                    <Image src={explore} alt="explore" width={500} height={500} className="object-contain" />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                    <h2 className="text-[48px] text-[#000] leading-[1.1] font-OpenSans">
                        Over <span className="text-primaryRed"> 1000+ talented </span>People Registered in our website
                    </h2>
                    <p className="mt-8 text-[18px] text-[#52566e] leading-1.5 font-Poppins">
                        Explore a Thriving Talent Hub with 1000+ Registered Individuals on Our Website. Our Diverse
                        Community Encompasses Artists, Designers, Programmers, and More. We Ensure Top-Quality Talent
                        Through Rigorous Vetting. Unlock Networking Opportunities, Collaborations, and Job Postings. For
                        Talented Individuals, It's a Spotlight for Your Skills. For Businesses, It's a Source of
                        Top-Tier Talent. Join Our Vibrant Community Today at Site Vacancy and Discover Endless
                        Possibilities.
                    </p>
                    <div className="mt-6 cursor-pointer w-[220px] h-[62px] bg-[#fa4f08] rounded-16 flex items-center justify-center text-[16px] font-semibold text-[#fff]">
                        <Link href={URLPaths.JOB_LIST}>Explore More </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreSection;
