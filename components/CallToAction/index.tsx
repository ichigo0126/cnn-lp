import React from "react";
import styles from "./style.module.css";
import classnames from "classnames";

function index() {
  return (
    <section
      className={classnames(
        styles["call-to-action"],
        "text-white",
        "text-center"
      )}
      id="signup"
    >
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <h2 className="mb-4">サークル公式Twitterアカウント準備中...</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
