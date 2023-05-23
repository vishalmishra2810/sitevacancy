import styles from "./Footer.module.scss";
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
          <input type="email" placeholder="Enter your email" 
          className={styles.newsletter_input}/>
          <button
            className={styles.newsletter_button}
          >Subscribe</button>
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.column}>
          <h3>Column 1</h3>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Column 2</h3>
          <ul>
            <li>Link 4</li>
            <li>Link 5</li>
            <li>Link 6</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Column 3</h3>
          <ul>
            <li>Link 7</li>
            <li>Link 8</li>
            <li>Link 9</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Column 4</h3>
          <ul>
            <li>Link 10</li>
            <li>Link 11</li>
            <li>Link 12</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>&copy; 2023 JobPao. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
