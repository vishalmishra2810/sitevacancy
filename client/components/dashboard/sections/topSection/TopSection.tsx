import Image from 'next/image';
import React, { useState } from 'react';
import mobile_play from '../../../../assets/mobile_play.png';
import search from '../../../../assets/search.svg';
import { useRouter } from 'next/router';
import { URLPaths } from '@/utils/constant';
import { HEADER_LINKS } from './constant';
import Link from 'next/link';
import axios from 'axios';
import SlidingText from '@/components/slidingText/SlidingText';

let throttle: any = null;
function TopSection() {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const goToHomePage = () => {
        router.push(URLPaths.HOME);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/search?query=${query}`);
            setSearchResult(response.data);
        } catch (error) {
            setSearchResult([]);
        }
    };

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        if (throttle) {
            clearTimeout(throttle);
        }
        throttle = setTimeout(() => {
            handleSearch();
        }, 400);
    };

    console.log('here are we')
    return (
        <div className="w-[var(--max-width)] mx-auto">
            <div className="h-[96px] flex items-center justify-between gap-[72px]">
                <div className="OpenSans text-[36px] cursor-pointer font-[800]" onClick={goToHomePage}>
                    Site
                    <span className="text-primaryRed">Vacancy</span>
                </div>
                <ul className="flex items-center gap-[42px] list-none">
                    {HEADER_LINKS.map((item, index) => (
                        <Link
                            className="text-[18px] font-[500] text-primaryBlack cursor-pointer hover:text-primaryRed font-Roboto transition-all duration-300 hover:font-bold"
                            key={index}
                            href={item?.path}
                        >
                            {item?.label}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-3 my-[64px]">
                <div className="flex-[2]">
                    <h1 className="text-[60px] font-[700] mb-8 font-OpenSans leading-[1.1]">
                        Find Your{' '}
                        <span className="text-primaryRed">
                            <SlidingText />
                        </span>{' '}
                        <br />
                        Now {"It's"} Easy.
                    </h1>
                    <p className="text-[20px] font-[500] font-Roboto italic mb-12">
                        Discover Your Dream Job Today! Thousands of New <br />
                        jobs Added Daily for Your Next Career Move.
                    </p>
                    <div
                        className={`${
                            searchResult.length > 0 && 'rounded-bl-[0px] rounded-br-[0px]'
                        } mt-[62px] w-full flex items-center gap-2 h-[72px] rounded-[36px] input-shadow px-8 relative`}
                        onClick={() => {
                            router.push(URLPaths.JOB_LIST);
                        }}
                    >
                        <Image src={search} alt="search" width={32} height={32} />
                        <input
                            type="text"
                            placeholder="Search by Job Title, Keywords, or Company"
                            className="flex-1 w-full h-[72px] border-none bg-transparent font-OpenSans font-[400] text-[18px] placeholder-[#BDBDBD] focus:outline-none"
                            value={query}
                            onChange={handleQueryChange}
                        />
                        <button
                            className="w-[140px] h-[52px] rounded-[26px] bg-primaryRed text-white font-OpenSans font-[500] text-[20px]"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="flex-1 w-full h-full ">
                    <Image
                        src={mobile_play}
                        alt="Job Joy"
                        placeholder="blur"
                        blurDataURL="LbRoa3xu.mWBoyMwtRyD%~f+Mwof"
                        width={400}
                        height={500}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default TopSection;
