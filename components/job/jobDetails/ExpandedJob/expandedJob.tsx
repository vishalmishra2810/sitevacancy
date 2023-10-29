import SanityImage from "@/common/sanityImage/SanityImage";
import React from "react";
import styles from "./ExpandedJob.module.scss";
import CrossIcon from "./../../../../assets/cross.svg";
import Image from "next/image";

export const ExpandedJob: React.FC<{
  job: any;
  setExpandedJob: (value: boolean) => void;
}> = ({ job, setExpandedJob }) => {
  const clickToCloseModal = () => {
    setExpandedJob(false);
  };

  const checkClickOnBackGround = (event: any) => {
    if (event.target.className === styles.expandedJob) {
      setExpandedJob(false);
    }
  };
  return (
    <div className={styles.expandedJob} onClick={checkClickOnBackGround}>
      <div className={styles.expandedJob__container}>
        <div className={styles.expandedJob__container_close}>
          <Image
            src={CrossIcon}
            alt="X"
            width={20}
            height={20}
            className={styles.expandedJob__container_close_icon}
            onClick={clickToCloseModal}
          />
        </div>
        <div className={styles.expandedJob__container_company_description}>
          <div className={styles.expandedJob__container_company}>
            <SanityImage img={job?.companyLogo} />
            <div className={styles.expandedJob__container_company_name}>
              {job?.companyName}
            </div>
          </div>
          <div className={styles.expandedJob__container_title}>
            {job?.jobTitle}
          </div>
          <div className={styles.expandedJob__container_description}>
          </div>
          <div className={styles.expandedJob__container_button}>
            <button className={styles.expandedJob__container_button_apply}>
              Apply Now
            </button>
            <button className={styles.expandedJob__container_button_save}>
              Save Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
