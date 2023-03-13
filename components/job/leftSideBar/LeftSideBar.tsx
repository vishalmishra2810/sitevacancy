import SelectOption from "@/common/selectOption/SelectOption";
import React from "react";
import styles from "./LeftSideBar.module.scss";

function LeftSideBar() {
  return (
    <div className={styles.leftSideBar}>
      <SelectOption
        title="Job Type"
        options={["Full Time", "Part Time", "Contract", "Internship"]}
      />
      <SelectOption
        title="Job Type"
        options={["Full Time", "Part Time", "Contract", "Internship"]}
      />
      <SelectOption
        title="Job Type"
        options={["Full Time", "Part Time", "Contract", "Internship"]}
      />
    </div>
  );
}

export default LeftSideBar;
