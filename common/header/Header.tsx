import { useRouter } from "next/router";
import React from "react";
import styles from "./Header.module.scss";

function Header() {
  const router = useRouter();
  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.topSection__header__logo} onClick={goToHomePage}>
        Site
        <span className={styles.topSection_red}>Vacancy</span>
      </div>
    </header>
  );
}

export default Header;
