import React from "react";
import style from "./ApplySection.module.scss";

import Image from "next/image";
import { HOW_TO_APPLY } from "./constant";

function ApplySections() {
  return (
    <div className={style.applySection}>
      <div className={style.applySection__header}>
        <p className={style.applySection__header__title}>How to Apply</p>
        <h2 className={style.applySection__header__description}>
          Follow Easy 4 Steps
        </h2>
        <p className={style.applySection__header__subtitle}>
          You can apply for a job by follow these steps below <br /> and get
          your dream job. <br />
        </p>
      </div>
      <div className={style.applySection__body}>
        {HOW_TO_APPLY.map((item, index) => (
          <div className={style.applySection__body__item} key={index}>
            <div
              className={style.applySection__body__item__top_box}
              style={{ border: "3px solid " + item.color }}
            ></div>
            <div className={style.applySection__body__item__body}>
              <Image
                src={item?.image}
                alt="search"
                width={48}
                height={48}
                style={{ filter: item.hex_color }}
                className={style.applySection__body__item__icon}
              />
              <h3 className={style.applySection__body__item__title}>
                {item?.title}
              </h3>
              <p className={style.applySection__body__item__description}>
                {item?.description}
              </p>
            </div>
            <div
              className={style.applySection__body__item__bottom_box}
              style={{ border: "3px solid " + item.color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApplySections;
