import React from "react";
import JobDetails from "./jobDetails/JobDetails";
import styles from "./JobList.module.scss";
import LeftSideBar from "./leftSideBar/LeftSideBar";

function JobList() {
  return (
    <div className={styles.jobList}>
      <div className={styles.main__container}>
        <div className={styles.jobList__container}>
          <LeftSideBar />
          <JobDetails />
        </div>
      </div>
    </div>
  );
}

export default JobList;
