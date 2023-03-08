import React from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer__top}>
        <div className={style.footer__top__content}>
          <ul className={style.footer__top__content__list}>
            <li className={style.footer__top__content__list__item}>About Us</li>
            <li className={style.footer__top__content__list__item}>
              Contact Us
            </li>
            <li className={style.footer__top__content__list__item}>
              Privacy Policy
            </li>
            <li className={style.footer__top__content__list__item}>
              Terms & Conditions
            </li>
            <li className={style.footer__top__content__list__item}>FAQ</li>
          </ul>
        </div>
        <div className={style.footer__bottom__content}>
          <span className={style.footer__bottom__content__facebook_icon}>
            <i className="fab fa-facebook-f"></i>
          </span>
        </div>
      </div>
      <div className={style.footer__bottom}>
        <p className={style.footer__bottom__text}>
          @ 2023 JobPao All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
