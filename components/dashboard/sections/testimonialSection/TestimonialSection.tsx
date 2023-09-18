import Image from "next/image";
import React from "react";
import { TESTIMONIAL_SECTION } from "./constant";
import style from "./TestimonialSection.module.scss";

function TestimonialSection() {
  return (
    <div className={style.testimonialSection}>
      <div className={style.testimonialSection__container}>
        <h2 className={style.title}>What a job holder says about us</h2>
        <p className={style.description}>
          This is what our job holder says about us and how
          <br /> we helped them to find their dream job.
        </p>
        <div className={style.testimonialSection__card}>
          {TESTIMONIAL_SECTION?.map((item, index) => (
            <div className={style.testimonialSection__card__item} key={index}>
              <div className={style.testimonialSection__card__img}>
                <Image
                  src={item?.icon}
                  alt="testimonial"
                  width={80}
                  height={80}
                  className={style.testimonialSection__card__img__icon}
                />
              </div>

              <h3 className={style.testimonialSection__card__content__title}>
                {item?.name}
              </h3>
              <p className={style.testimonialSection__card__content__subtitle}>
                {item?.designation}
              </p>
              <p
                className={style.testimonialSection__card__content__description}
              >
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
