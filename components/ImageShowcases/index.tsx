import React from "react";
import styles from "./style.module.css";
import classnames from "classnames";

function index() {
  return (
    <section className={styles.showcase}>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div
            className={classnames(styles["showcase-img"],"col-lg-6", "order-lg-2", "text-white")}
            style={{ backgroundImage: 'url("/img/bg-showcase-1.jpg")' }}
          />
          <div className={classnames(styles["showcase-text"],"col-lg-6", "order-lg-1" ,"my-auto ")}>
            <h2>Fully Responsive Design</h2>
            <p className="lead mb-0">
              When you use a theme created by Start Bootstrap, you know that the
              theme will look great on any device, whether it's a phone, tablet,
              or desktop the page will behave responsively!
            </p>
          </div>
        </div>
        <div className="row g-0">
          <div
            className={classnames(styles["showcase-img"],"col-lg-6","text-white")}
            style={{ backgroundImage: 'url("/img/bg-showcase-2.jpg")' }}
          />
          <div className={classnames(styles["showcase-text"],"col-lg-6 my-auto ")}>
            <h2>Updated For Bootstrap 5</h2>
            <p className="lead mb-0">
              Newly improved, and full of great utility classes, Bootstrap 5 is
              leading the way in mobile responsive web development! All of the
              themes on Start Bootstrap are now using Bootstrap 5!
            </p>
          </div>
        </div>
        <div className="row g-0">
          <div
            className={classnames(styles["showcase-img"], "col-lg-6 order-lg-2 text-white ")}
            style={{ backgroundImage: 'url("/img/bg-showcase-3.jpg")' }}
          />
          <div className={classnames(styles["showcase-text"],"col-lg-6" ,"order-lg-1" ,"my-auto")}>
            <h2>Easy to Use &amp; Customize</h2>
            <p className="lead mb-0">
              Landing Page is just HTML and CSS with a splash of SCSS for users
              who demand some deeper customization options. Out of the box, just
              add your content and images, and your new landing page will be
              ready to go!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
