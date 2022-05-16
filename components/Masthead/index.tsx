import React from "react";
import styles from "./style.module.css";
import classnames from "classnames";

function index() {
  return (
    <header className={classnames(styles.masthead)}>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center text-white">
              <h1 className="mb-5">
                CNN(Create New Nifty)
              </h1>
              <h3>徳島県を拠点に置くオンラインプログラミングサークル</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default index;
