import React from "react";
import styles from "./CompanyList.module.scss";

const CompanyList = () => {
  return (
    <div className={styles.job_list}>
      <div className={styles.container}>
        <h1>Company List</h1>
        <ul className={styles.list}>
          <li className={styles.item}>Company 1</li>
          <li className={styles.item}>Company 2</li>
          <li className={styles.item}>Company 3</li>
          <li className={styles.item}>Company 4</li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyList;
