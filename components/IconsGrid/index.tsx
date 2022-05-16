import React from "react";
import styles from "./style.module.css";
import classnames from "classnames";

function index() {
  return (
    <section
      className={classnames(
        styles["features-icons"],
        "bg-light",
        "text-center"
      )}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className={classnames(
                styles["features-icons-item"],
                "mx-auto",
                "mb-5",
                "mb-lg-0",
                "mb-lg-3"
              )}
            >
              <div
                className={classnames(styles["features-icons-icon"], "d-flex")}
              >
                <i className="bi-window m-auto text-primary" />
              </div>
              <h3>Fully Responsive</h3>
              <p className="lead mb-0">
                This theme will look great on any device, no matter the size!
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={classnames(
                styles["features-icons-item"],
                "mx-auto",
                "mb-5",
                "mb-lg-0",
                "mb-lg-3"
              )}
            >
              <div
                className={classnames(styles["features-icons-icon"], "d-flex")}
              >
                <i className="bi-layers m-auto text-primary" />
              </div>
              <h3>Bootstrap 5 Ready</h3>
              <p className="lead mb-0">
                Featuring the latest build of the new Bootstrap 5 framework!
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={classnames(
                styles["features-icons-item"],
                "mx-auto",
                "mb-0",
                "mb-lg-3"
              )}
            >
              <div
                className={classnames(styles["features-icons-icon"], "d-flex")}
              >
                <i className="bi-terminal m-auto text-primary" />
              </div>
              <h3>Easy to Use</h3>
              <p className="lead mb-0">
                Ready to use with your own content, or customizex the source
                files!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
