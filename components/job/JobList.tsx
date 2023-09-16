import React from "react";
import JobDetails from "./jobDetails/JobDetails";
import styles from "./JobList.module.scss";
import LeftSideBar from "./leftSideBar/LeftSideBar";
import Footer from "@/common/footer/Footer";
import JobListing from "@/response/jobListing";

interface JobsProps {
  jobs: JobListing[];
}
function JobList({ jobs}:JobsProps) {
  return (
    <div className={styles.jobList}>
      <div className={styles.main__container}>
        <div className={styles.jobList__container}>
          <LeftSideBar />
          <JobDetails  jobs={jobs}/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default JobList;
