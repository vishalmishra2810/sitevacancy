import styles from "./Footer.module.scss";

const columnsData = [
  {
    title: "Column 1",
    links: ["Link 1", "Link 2", "Link 3"],
  },
  {
    title: "Column 2",
    links: ["Link 4", "Link 5", "Link 6"],
  },
  {
    title: "Column 3",
    links: ["Link 7", "Link 8", "Link 9"],
  },
  {
    title: "Column 4",
    links: ["Link 10", "Link 11", "Link 12"],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.topSection_left}>
          <h3>Sign up for our Newsletter</h3>
          <p className={styles.topSection_left_p}>
            Stay informed about our latest updates through email. Subscribe to
            our newsletter.
          </p>
        </div>
        <div className={styles.newsletter}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.newsletter_input}
          />
          <button className={styles.newsletter_button}>Subscribe</button>
        </div>
      </div>
      <div className={styles.middleSection}>
        {columnsData.map((column, index) => (
          <div className={styles.column} key={index}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottomSection}>
        <p>&copy; 2023 JobPao. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
