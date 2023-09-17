import Image from "next/image";
import React from "react";
import style from "./PostJobSection.module.scss";
import postJob from "../../../../assets/postjob.png";
import { URLPaths } from "@/utils/constant";

function PostJobSection() {
  const handleButtonClick = () => {
    window.location.href = URLPaths.POST_JOB;
  };
  return (
    <div className={style.postJobSection}>
      <div className={style.postJobSection__container}>
        <div className={style.postJobSection__left}>
          <h2 className={style.title}>
            500+ World Top Company Posted Their Job
          </h2>
          <p className={style.description}>
            Explore a world of opportunity with 500+ of the globe's top
            companies posting their job openings on our platform. Whether you're
            a seasoned professional or just starting your career journey, our
            website offers a gateway to prestigious organizations seeking
            top-tier talent. From tech giants to innovative startups, we connect
            you with a diverse array of industries and roles. Discover your
            dream job, enhance your career, and embark on a path to success.
            Join our platform today and access an unparalleled selection of job
            opportunities from the world's leading companies. Your next career
            move awaits at Site Vacancy.
          </p>
          <div
            className={style.postJobSection__left__btn}
            onClick={handleButtonClick}
          >
            Post a Job
          </div>
        </div>
        <div className={style.postJobSection__right}>
          <Image
            src={postJob}
            alt="postJob"
            width={600}
            height={600}
            className={style.postJobSection__right__img}
          />
        </div>
      </div>
    </div>
  );
}

export default PostJobSection;
