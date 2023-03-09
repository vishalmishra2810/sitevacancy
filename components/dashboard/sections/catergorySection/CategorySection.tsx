import React from "react";
import style from "./CategorySection.module.scss";
import { CATEGORY_SECTION } from "./constant";

function CategorySection() {
  return (
    <div className={style.categorySection}>
      <div className={style.categorySection__container}>
        <h2 className={style.title}>Browse Job Categories</h2>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, <br />
          nisl eget ultricies tincidunt, nisl elit lacinia tortor, vitae lacinia
        </p>
        <div className={style.categorySection__card}>
          {CATEGORY_SECTION?.map((item, index) => (
            <div className={style.categorySection__card__item} key={index}>
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
          <div className={style.more_category}>100+ More Category</div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
