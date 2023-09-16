import React from "react";
import styles from "./ShowSearchResult.module.scss";

function ShowSearchResult({ searchResult }: { searchResult: any[] }) {
  return (
    <div className={styles.searchResult}>
      {searchResult?.slice(0, 5)?.map((item, index) => (
        <div className={styles.searchResult__item} key={index}>
          <div className={styles.searchResult__item__title}>{item?.jobTitle}</div>
        </div>
      ))}
    </div>
  );
}

export default ShowSearchResult;
