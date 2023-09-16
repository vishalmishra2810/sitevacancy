import SanityDescription from "@/common/sanityDescription/SanityDescription";
import SanityImage from "@/common/sanityImage/SanityImage";
import JobListing from "@/response/jobListing";
import styles from "../JobDetails.module.scss";
import React from "react";
import { CloseOutlined } from "@ant-design/icons";

export const ExpandedJob: React.FC<{ jobs: JobListing[] }> = ({ jobs }) => {
  return (
    <div className={styles.jobDetails}>
      <div className={styles.jobDetails__container}>
        {jobs &&
          jobs?.map((item: JobListing, index: number) => (
            <div className={styles.jobDetails__container_item} key={index}>
              <div className={styles.jobDetails__container_item_company}>
                <SanityImage img={item?.companyLogo} />
                <div className={styles.jobDetails__container_item_company_name}>
                  {item?.companyName}
                </div>
              </div>
              <div className={styles.jobDetails__container_item_title}>
                {item?.jobTitle}
              </div>
              <CloseOutlined rev={undefined} />
              <div className={styles.jobDetails__container_item_description}>
                <SanityDescription
                  description={item?.jobDescription}
                  limit={3}
                />
              </div>
              <div className={styles.jobDetails__container_item_properties}>
                <div
                  className={styles.jobDetails__container_item_properties_item}
                >
                  {item.jobType}
                </div>
                <div
                  className={styles.jobDetails__container_item_properties_item}
                >
                  {item.location}
                </div>
                <div
                  className={styles.jobDetails__container_item_properties_item}
                >
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(parseFloat(item?.salary))}
                </div>
              </div>
              <div className={styles.jobDetails__container_item_footer}>
                <button
                  // onClick={handleButtonChange}
                  className={styles.jobDetails__container_item_footer_apply}
                >
                  Show More
                </button>
                {/* {expandedJob && <ExpandedJob />} */}
                <div className={styles.jobDetails__container_item_footer_save}>
                  Save
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
