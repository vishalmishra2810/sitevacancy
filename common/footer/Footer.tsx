import Image from 'next/image';
import React from 'react';
import siteVacancyIcon from './../../public/siteVacancy.svg';

function Footer() {
    return (
        <footer className="p-8">
            <div className="flex mb-8">
                <div className="flex-[1.6] flex flex-col gap-4">
                    <Image
                        src={siteVacancyIcon}
                        alt="siteVacancy"
                        width={100}
                        height={100}
                        className="object-contain rounded-[16px]"
                    />
                    <p className="text-[14px] font-[400] font-Poppins text-primaryBlack">
                        Site Vacancy is a Job Portal Website. We are here to help you to find your dream job.
                    </p>
                </div>
                <div className="flex-1 mt-8">
                    <h3 className="text-[20px] font-[600]text-primaryBlack font-OpenSans">Company</h3>
                    <ul className="mt-6 flex flex-col gap-4">
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">About Us</li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">Contact Us</li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">Privacy Policy</li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">Terms & Conditions</li>
                    </ul>
                </div>
                <div className="flex-1  mt-8">
                    <h3 className="text-[20px] font-[600]text-primaryBlack font-OpenSans">Job Seekers</h3>
                    <ul className="mt-6 flex flex-col gap-4">
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">Create Account</li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">Career Counseling</li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">My Account</li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">FAQ</li>
                    </ul>
                </div>
                <div className="flex-1 mt-8">
                    <h3 className="text-[20px] font-[600]text-primaryBlack font-OpenSans">Support</h3>
                    <ul className="mt-6 flex flex-col gap-4">
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">Pricing & Plans</li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">Documentation </li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">Guides</li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">FAQ</li>
                    </ul>
                </div>
                <div className="flex-1 mt-8">
                    <h3 className="text-[20px] font-[600]text-primaryBlack font-OpenSans">Company</h3>
                    <ul className="mt-6 flex flex-col gap-4">
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">About Us</li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">Blog </li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">Jobs </li>
                        <li className="text-[16px] font-[400] font-Poppins text-primaryBlack">FAQ</li>
                    </ul>
                </div>
            </div>
            <div
                className="flex h-16 items-center
             border-t border-primaryRed
            "
            >
                <p
                    className="
                  text-[14px] font-[400] font-Poppins text-primaryBlack 
                "
                >
                    © 2023 SiteVacancy, Inc. All rights reserved.
                </p>
                <div className="flex-1 flex justify-end">
                    <div className="flex items-center gap-4">
                        <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
                        <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
                        <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
                        <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
