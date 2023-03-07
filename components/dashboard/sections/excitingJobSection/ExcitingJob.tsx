import Image from "next/image";
import React, { useState } from "react";
import { EXCITING_JOB_SECTION } from "./constant";
import style from "./ExcitingJob.module.scss";
import bookMark from "../../../../assets/bookmark.svg";
import salary from "../../../../assets/salary.svg";
import heart from "../../../../assets/heart.svg";
import location from "../../../../assets/location.svg";

function ExcitingJob() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className={style.excitingJob}>
      <div className={style.excitingJob__container}>
        <h2 className={style.title}>
          Grab these exciting job offer and <br />
          apply now
        </h2>
        <div className={style.excitingJob__toggle}>
          <div
            className={`${style.excitingJob__toggle__text}
            ${isToggled ? "" : style.onText}
          `}
          >
            Part Time
          </div>
          <button className={style.toggleButton} onClick={toggle}>
            <div
              className={`${style.toggleSwitch} ${isToggled ? style.on : ""}`}
            />
          </button>
          <div
            className={`${style.excitingJob__toggle__text}
            ${isToggled ? style.onText : ""}
          `}
          >
            Full Time
          </div>
        </div>
        <div className={style.excitingJob__card}>
          {EXCITING_JOB_SECTION?.map((item, index) => (
            <div
              className={style.excitingJob__card__item}
              key={index}
              style={{
                border: "1px solid " + item?.color,
              }}
            >
              <div className={style.excitingJob__card__item__img}>
                <Image
                  src={item?.company_logo}
                  alt="Rectangle-1"
                  width={60}
                  height={60}
                  className={style.excitingJob__card__item__img__icon}
                />
                <Image
                  src={bookMark}
                  alt="bookmark"
                  width={20}
                  height={20}
                  className={style.excitingJob__card__item__img__bookmark}
                />
              </div>
              <div className={style.excitingJob__card__item__name}>
                {item?.company_name}
              </div>
              <div className={style.excitingJob__card__item__title}>
                {item?.job_title}
              </div>
              <div className={style.excitingJob__card__item__salary}>
                <Image
                  src={salary}
                  alt="salary"
                  width={20}
                  height={20}
                  className={style.excitingJob__card__item__salary__icon}
                />
                <p className={style.excitingJob__card__item__salary__text}>
                  {item?.job_salary} / monthly
                </p>
              </div>
              <div className={style.excitingJob__card__item__location}>
                <Image
                  src={location}
                  alt="location"
                  width={20}
                  height={20}
                  className={style.excitingJob__card__item__location__icon}
                />
                <p className={style.excitingJob__card__item__location__text}>
                  {item?.job_location}
                </p>
              </div>
              <div className={style.excitingJob__card__item__footer}>
                <div
                  className={style.excitingJob__card__item__footer__heart}
                  style={{
                    background: item?.color,
                  }}
                >
                  <Image
                    src={heart}
                    alt="heart"
                    width={24}
                    height={24}
                    style={{
                      filter: item?.hex_color,
                      fill: "#fff",
                    }}
                    className={
                      style.excitingJob__card__item__footer__heart__icon
                    }
                  />
                </div>
                <div
                  className={style.excitingJob__card__item__footer__apply}
                  style={{
                    background: item?.color,
                  }}
                >
                  Apply Now
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExcitingJob;
