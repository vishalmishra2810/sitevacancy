import React from "react";
import style from "./CategorySection.module.scss";
import { CATEGORY_SECTION } from "./constant";
import { useRouter } from "next/router";
import { URLPaths } from "@/utils/constant";

function CategorySection() {
  const router = useRouter();
  const openJobCategory = (category: string) => {
    const query = category ? `?category=${category}` : "";
    router.push(URLPaths.JOB_LIST + `${query}`);
  };
  return (
    <div className={style.categorySection}>
      <div className={style.categorySection__container}>
        <h2 className={style.title}>Browse Job Categories</h2>
        <p className={style.description}>
          Explore a wide range of job categories to discover opportunities that{" "}
          <br />
          match your skills and interests.
        </p>
        <div className={style.categorySection__card}>
          {CATEGORY_SECTION?.map((item, index) => (
            <div
              className={style.categorySection__card__item}
              key={index}
              onClick={() => {
                openJobCategory(item?.title);
              }}
            >
              <h3 className={style.categorySection__card__item__title}>
                {item?.title}
              </h3>
              <p className={style.categorySection__card__item__description}>
                {item?.description}+ Posted New Jobs
              </p>
              <div
                className={style.categorySection__card__item__footer}
                style={{
                  background: item?.color,
                }}
              ></div>
            </div>
          ))}
          <div
            className={style.more_category}
            onClick={() => {
              openJobCategory("");
            }}
          >
            100+ More Category
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
