import Image from 'next/image';
import React from 'react';
import siteVacancyIcon from './../../public/siteVacancy.svg';

function Footer() {
    return (
        <footer className="p-8 bg-slate-900 border-t border-white">
            <div className="flex mb-8 gap-6">
                <div className="flex-[1.7] flex flex-col gap-4">
                    <Image
                        src={siteVacancyIcon}
                        alt="siteVacancy"
                        width={100}
                        height={100}
                        className="object-contain rounded-[16px]"
                    />
                    <p className="text-[14px] font-[400] font-Poppins text-white">
                        Site Vacancy is a Job Portal Website. We are here to help you to find your dream job.
                    </p>
                    <p className="text-[14px] font-[400] font-Poppins text-white">
                        © 2021 Site Vacancy. All Rights Reserved.
                    </p>
                </div>
                <div className="flex-1 mt-8">
                    <h3 className="text-[20px] font-[600] text-white font-OpenSans">Company</h3>
                    <ul className="mt-6 flex flex-col gap-4">
                        <li className="text-[16px] font-[400] font-Poppins  text-white">About Us</li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">Contact Us</li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">Privacy Policy</li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">Terms & Conditions</li>
                    </ul>
                </div>
                <div className="flex-1  mt-8">
                    <h3 className="text-[20px] font-[600] text-white font-OpenSans">Job Seekers</h3>
                    <ul className="mt-6 flex flex-col gap-4">
                        <li className="text-[16px] font-[400] font-Poppins  text-white">Create Account</li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">Career Counseling</li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">My Account</li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">FAQ</li>
                    </ul>
                </div>
                <div className="flex-1 mt-8">
                    <h3 className="text-[20px] font-[600] text-white font-OpenSans">Support</h3>
                    <ul className="mt-6 flex flex-col gap-4">
                        <li className="text-[16px] font-[400] font-Poppins  text-white">Pricing & Plans</li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">Documentation </li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">Guides</li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">FAQ</li>
                    </ul>
                </div>
                <div className="flex-1 mt-8">
                    <h3 className="text-[20px] font-[600] text-white font-OpenSans">Company</h3>
                    <ul className="mt-6 flex flex-col gap-4">
                        <li className="text-[16px] font-[400] font-Poppins  text-white">About Us</li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">Blog </li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">Jobs </li>
                        <li className="text-[16px] font-[400] font-Poppins  text-white">FAQ</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
