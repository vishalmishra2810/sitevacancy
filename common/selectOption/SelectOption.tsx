import React from "react";
import styles from "./SelectOption.module.scss";

function SelectOption({ title, options }: any) {
  return (
    <div className={styles.selectOption}>
      <div className={styles.selectOption__container}>
        <div className={styles.selectOption__container__title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.selectOption__container__options}>
          {options.map((option: any, index: any) => (
            <div
              className={styles.selectOption__container__options__option}
              key={index}
            >
              <input
                type="checkbox"
                name="jobType"
                id="jobType"
                value="Full Time"
                className={
                  styles.selectOption__container__options__option__input
                }
              />
              <label
                htmlFor="jobType"
                className={
                  styles.selectOption__container__options__option__label
                }
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
