import React from "react";
import classes from "./Footer.module.css";
import { logo } from "../../assets";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={classes.footerWrapper}>
      <div className={clsx(classes.footer, "container")}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="#" className={classes.logo} />
          <h1 className={classes.logoText}>
            Brand <span>Logo</span>
          </h1>
        </div>
        <div className={classes.linkContainer}>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Terms of Use
          </a>{" "}
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Privacy Policy
          </a>{" "}
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Cookies Policy
          </a>
        </div>
        <p className={classes.copyright}>
          © 2024 Brand Name. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
