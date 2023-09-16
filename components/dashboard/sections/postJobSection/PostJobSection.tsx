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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={style.postJobSection__left__btn} onClick={handleButtonClick}>Post a Job</div>
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
