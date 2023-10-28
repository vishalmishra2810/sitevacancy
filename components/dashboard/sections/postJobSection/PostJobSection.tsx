import Image from 'next/image';
import React from 'react';
import postJob from '../../../../assets/postjob.png';
import { URLPaths } from '@/utils/constant';
import { useRouter } from 'next/router';
import Link from 'next/link';

function PostJobSection() {
    const router = useRouter();
    const handleButtonClick = () => {
        router.push(URLPaths.POST_JOB);
    };

    return (
        <div className="w-[var(--max-width)] mx-auto my-[60px]">
            <h2 className="text-[48px] font-[600] font-OpenSans text-center text-primaryBlack leading-[1.1]">
                <span className="text-primaryRed font-bolder"> 500+</span> World Top Company
                <br /> Posted Their Job
            </h2>
            <div className="flex items-center gap-[24px] justify-center">
                <div className="flex flex-1 flex-col h-[600px] items-center justify-center">
                    <p className="text-[18px] font-[400] text-primaryBlack mt-[32px] font-Roboto">
                        Uncover Limitless Opportunities with 500+ of the World's Premier Companies on Our Platform.
                        Whether you're a Seasoned Professional or Embarking on Your Career Journey, our Website Serves
                        as the Gateway to Prestigious Organizations in Pursuit of Top-Tier Talent. From Tech Industry
                        Titans to Trailblazing Startups, We Bridge the Gap to a Myriad of Industries and Roles. Realize
                        Your Dream Career, Propel Your Professional Journey, and Set Sail on the Path to Success. Join
                        Our Platform Today and Gain Access to an Unparalleled Collection of Job Openings from the
                        World's Elite Corporations. Your Next Career Advancement Awaits at Site Vacancy –
                        <span className="italic">Your Ultimate Job Destination.</span>
                    </p>
                    <div className="mt-6 cursor-pointer w-[220px] h-[62px] bg-[#fa4f08] rounded-16 flex items-center justify-center text-[16px] font-semibold text-[#fff]">
                        <Link href={URLPaths.JOB_LIST}>Your Job Destination </Link>
                    </div>
                </div>
                <div className="flex flex-1 h-[600px] items-center justify-center">
                    <Image src={postJob} alt="postJob" width={600} height={600} className="object-cover" />
                </div>
            </div>
        </div>
    );
}

export default PostJobSection;
