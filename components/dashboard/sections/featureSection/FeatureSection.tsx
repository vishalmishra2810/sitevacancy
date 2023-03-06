import React from "react";
import style from "./FeatureSection.module.scss";
import feature from "../../../../assets/feature.png";
import Image from "next/image";
import { FEATURE } from "./constant";

function FeatureSection() {
  return (
    <div className={style.featureSection}>
      <div className={style.featureSection__left}>
        <Image
          src={feature}
          alt="feature"
          placeholder="blur"
          className={style.featureSection__left__img}
          width={600}
          height={650}
        />
      </div>
      <div className={style.featureSection__right}>
        <h2 className={style.featureSection__right__title}>
          We are always here to help you
        </h2>
        <div className={style.featureSection__right__content}>
          {FEATURE?.map((item, index) => (
            <div
              className={style.featureSection__right__content__item}
              key={index}
            >
              <div
                className={style.featureSection__right__content__item__icon}
                style={{ background: item?.color }}
              >
                <Image
                  src={item.icon}
                  alt="feature1"
                  width={36}
                  height={36}
                  style={{
                    filter: item?.hex_color,
                  }}
                />
              </div>
              <div className={style.featureSection__right__content__item__text}>
                <h3
                  className={
                    style.featureSection__right__content__item__text__title
                  }
                >
                  {item?.title}
                </h3>
                <p
                  className={
                    style.featureSection__right__content__item__text__description
                  }
                >
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
