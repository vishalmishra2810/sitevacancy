import CustomSelect from "@/common/customSelect/CustomSelect";
import React, { useState } from "react";
import styles from "./JobDetails.module.scss";
import Image from "next/image";
import { JOB_DATA } from "./constant";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function JobDetails() {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.jobDetails}>
      <div className={styles.jobDetails_header}>
        <h3 className={styles.jobDetails_header_h3}>Showing 43 jobs</h3>
        <div className={styles.jobDetails_header_div}>
          <span className={styles.jobDetails_header_span}>Sort by:</span>
          <CustomSelect
            options={options}
            value={selectedOption}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.jobDetails__container}>
        {JOB_DATA?.map((item: any, index: number) => (
          <div className={styles.jobDetails__container_item} key={index}>
            <Image
              src={item.logo}
              alt={item.company}
              width={50}
              height={50}
              className={styles.jobDetails__container_item_logo}
            />
            <div className={styles.jobDetails__container_item_title}>
              {item?.title}
            </div>
            <div className={styles.jobDetails__container_item_description}>
              {item?.description}
            </div>
            <div className={styles.jobDetails__container_item_properties}>
              <div
                className={styles.jobDetails__container_item_properties_item}
              >
                Full Time
              </div>
              <div
                className={styles.jobDetails__container_item_properties_item}
              >
                Remote
              </div>
              <div
                className={styles.jobDetails__container_item_properties_item}
              >
                $100k - $120k
              </div>
            </div>
            <div className={styles.jobDetails__container_item_footer}>
              <div className={styles.jobDetails__container_item_footer_apply}>
                Apply Now
              </div>
              <div className={styles.jobDetails__container_item_footer_save}>
                Save
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobDetails;
