import CustomSelect from "@/common/customSelect/CustomSelect";
import React, { useState } from "react";
import styles from "./JobDetails.module.scss";
import SanityImage from "@/common/sanityImage/SanityImage";
import { ExpandedJob } from "./ExpandedJob/expandedJob";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

interface JobsProps {
  jobs: any[];
}
function JobDetails({ jobs }: JobsProps) {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const [expandedJob, setExpandedJob] = useState(false);

  const handleButtonChange = () => {
    setExpandedJob(true);
  };

  return (
    <div className={styles.jobDetails}>
      <div className={styles.jobDetails_header}>
        <h3 className={styles.jobDetails_header_h3}>
          Showing {jobs?.length} jobs
        </h3>
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
        {jobs &&
          jobs?.map((item: any, index: number) => (
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
                  onClick={handleButtonChange}
                  className={styles.jobDetails__container_item_footer_apply}
                >
                  Show More
                </button>
                {expandedJob && <ExpandedJob job={item} setExpandedJob={setExpandedJob} />}
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
