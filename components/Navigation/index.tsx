import React from "react";
import styles from "./style.module.css";
import classnames from "classnames";

function index() {
  return (
    <nav
      className={classnames(
        styles.navbar,
        styles["navbar-light"],
        "bg-light",
        "static-top"
      )}
    >
      <div className="container">
        <a className={classnames(styles["navbar-brand"])} href="#!">
          Start Bootstrap
        </a>
        <a className="btn btn-primary" href="#signup">
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default index;
