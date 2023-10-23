import React from "react";
import styles from "./CompanyList.module.scss";
import companiesData from "./companies.json";
import Image from "next/image";

const CompanyList = () => {
  return (
    <div className={styles.companyList}>
      <div className={styles.companyList_container}>
        <div className={styles.companyList_header}>
          Find Companies that are hiring
        </div>
        <div className={styles.companyList_subheader}>
          Here are some companies that are hiring right now. Click on the
          company <br /> name to see the job listings.
        </div>
        <div className={styles.companyList_items}>
          {companiesData.map((company: any, index: number) => (
            <div key={index} className={styles.companyCard}>
              <Image
                src={company.logo}
                alt={company.name}
                width={80}
                height={80}
              />
              <h2 className={styles.companyCard_name}>{company.name}</h2>
              <p className={styles.companyCard_description}>
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
