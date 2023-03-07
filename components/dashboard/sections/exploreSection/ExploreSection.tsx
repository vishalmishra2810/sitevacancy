import React from "react";
import style from "./ExploreSection.module.scss";
import explore from "../../../../assets/explore.png";
import Image from "next/image";

function ExploreSection() {
  return (
    <div className={style.exploreSection}>
      <div className={style.exploreSection__container}>
        <div className={style.exploreSection__left}>
          <Image
            src={explore}
            alt="explore"
            width={500}
            height={500}
            className={style.exploreSection__left__img}
          />
        </div>
        <div className={style.exploreSection__right}>
          <h2 className={style.title}>
            Over 1000+ talented People Registered in our website
          </h2>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget ultricies tincidunt, nisl elit lacinia tortor,
            vitae lacinia nisl lorem eget nisl. Sed tincidunt, nisl eget
            ultricies tincidunt, nisl elit lacinia tortor, vitae lacinia nisl
            lorem eget nisl.
          </p>
          <div className={style.exploreSection__right__btn}>Explore More </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
