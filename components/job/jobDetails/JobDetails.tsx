import React from "react";
import styles from "./JobDetails.module.scss";

function JobDetails() {
  return (
    <div className={styles.jobDetails}>
      <div className={styles.jobDetails__container}>
        <div className={styles.jobDetails__container__header}>
          <div className={styles.jobDetails__container__header__title}>
            <h3 className={styles.jobDetails__container__header__title__h3}>
              Showing 43 jobs
            </h3>
            <div className={styles.jobDetails__container__header__title__sort}>
              <span
                className={
                  styles.jobDetails__container__header__title__sort__span
                }
              >
                Sort by:
              </span>
              <select
                name="sort"
                id="sort"
                className={
                  styles.jobDetails__container__header__title__sort__select
                }
              >
                <option value="date">Date</option>
                <option value="salary">Salary</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
