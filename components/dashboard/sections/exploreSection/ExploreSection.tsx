import React from "react";
import style from "./ExploreSection.module.scss";
import explore from "../../../../assets/explore.png";
import Image from "next/image";
import Link from "next/link";

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
            Discover a thriving talent hub with 1000+ registered individuals on
            our website. Our diverse community encompasses artists, designers,
            programmers, and more. We ensure top-quality talent through careful
            vetting. Enjoy networking opportunities, collaborations, and job
            postings. For talented individuals, it's a spotlight for your
            skills. For businesses, it's a source of top-tier talent. Join our
            community today at Site Vacancy and unlock endless possibilities.
          </p>
          <div className={style.exploreSection__right__btn}>
            <Link href={"/job-list"}>Explore More </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
