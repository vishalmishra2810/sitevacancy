import Image from "next/image";
import React, { useState } from "react";
import style from "./TopSection.module.scss";
import mobile_play from "../../../../assets/mobile_play.png";
import search from "../../../../assets/search.svg";
import { useRouter } from "next/router";
import { URLPaths } from "@/utils/constant";
import { HEADER_LINKS } from "./constant";
import Link from "next/link";
import axios from "axios";
import ShowSearchResult from "@/common/showSearchResult/ShowSearchResult";

let throttle: any = null;
function TopSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");
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
  return (
    <div className={style.topSection}>
      <div className={style.topSection__header}>
        <div className={style.topSection__header__logo} onClick={goToHomePage}>
          Site
          <span className={style.topSection_red}>Vacancy</span>
        </div>
        <ul className={style.topSection__header__menu}>
          {HEADER_LINKS.map((item, index) => (
            <Link
              className={style.topSection__header__menu__item}
              key={index}
              href={item?.path}
            >
              {item?.label}
            </Link>
          ))}
        </ul>
        {/* <ul className={style.topSection__header__menu}>
          {HEADER_LINKS_WITH_AUTH.map((item, index) => (
            <Link
              href={item?.path}
              className={`${style.topSection__header__menu__item}
               ${
                 item?.label === "Login"
                   ? style.topSection__header__menu__item__login
                   : style.topSection__header__menu__item__register
               }
              `}
              key={index}
            >
              {item?.label}
            </Link>
          ))}
        </ul> */}
      </div>
      <div className={style.topSection__body}>
        <div className={style.topSection__body__left}>
          <h1 className={style.topSection__body__left__title}>
            Find Your <span className={style.topSection_red}>Dream Job</span>{" "}
            <br />
            Now {"It's"} Easy.
          </h1>
          <p className={style.topSection__body__left__description}>
            Thousands of jobs here. Find your New Job <br />
            Today! New Jobs Added Every Day.
          </p>
          <div
            className={`${
              searchResult.length > 0 &&
              style.topSection__body__left__remove_radius
            } ${style.topSection__body__left__search}`}
          >
            <Image
              src={search}
              alt="search"
              width={32}
              height={32}
              className={style.topSection__body__left__search__icon}
            />
            <input
              type="text"
              placeholder="Search by Job Title, Keywords, or Company"
              className={style.topSection__body__left__search__input}
              value={query}
              onChange={handleQueryChange}
            />
            <button
              className={style.topSection__body__left__search__button}
              onClick={handleSearch}
            >
              Search
            </button>
            {searchResult.length> 0 && <ShowSearchResult searchResult={searchResult} />}
          </div>
        </div>
        <div className={style.topSection__body__right}>
          <Image
            src={mobile_play}
            alt="Job Joy"
            placeholder="blur"
            blurDataURL="LbRoa3xu.mWBoyMwtRyD%~f+Mwof"
            width={400}
            height={500}
            className={style.topSection__body__right__image}
          />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
