import React from "react";
import style from "./ApplySection.module.scss";
import search from "../../../../assets/search.svg";
import Image from "next/image";

function ApplySections() {
  return (
    <div className={style.applySection}>
      <div className={style.applySection__header}>
        <p className={style.applySection__header__title}>How to Apply</p>
        <h2 className={style.applySection__header__description}>
          Follow Easy 3 Steps
        </h2>
        <p className={style.applySection__header__subtitle}>
          You can apply for a job by follow these steps below <br /> and get
          your dream job. <br />
        </p>
      </div>
      <div className={style.applySection__body}>
        <div className={style.applySection__body__item}>
          <div className={style.applySection__body__item__top}></div>
          <div className={style.applySection__body__item__item_body}>
            <Image
              src={search}
              alt="search"
              width={42}
              height={42}
              className={style.applySection__body__item__icon}
            />
            <h3 className={style.applySection__body__item__title}>
              Search Job
            </h3>
            <p className={style.applySection__body__item__description}>
              First you need to search for a job that you want to apply.
            </p>
          </div>
          <div className={style.applySection__body__item__bottom}></div>
        </div>
      </div>
    </div>
  );
}

export default ApplySections;
