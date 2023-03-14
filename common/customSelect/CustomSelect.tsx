import styles from "./CustomSelect.module.scss";

const CustomSelect = ({ options, value, onChange }: any) => {
  return (
    <div className={styles.select}>
      <select value={value} onChange={onChange}>
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
