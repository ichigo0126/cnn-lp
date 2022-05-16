import React from "react";
import styles from "./style.module.css";
import classnames from "classnames";

type Props = {
  title: string;
  content: string;
  svg: any;
};

const Item: React.FC<Props> = ({ title, content, svg }) => {
  return (
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
        <div className={classnames(styles["features-icons-icon"], "d-flex")}>
          {svg}
        </div>
        <h3>{title}</h3>
        <p className="lead mb-0">{content}</p>
      </div>
    </div>
  );
};

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
          <Item
            title="Fully Responsive"
            content="This theme will look great on any device, no matter the size!"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                fill="currentColor"
                className="bi bi-steam m-auto text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z" />
                <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z" />
              </svg>
            }
          />
          <Item
            title="Bootstrap 5 Ready"
            content="Featuring the latest build of the new Bootstrap 5 framework!"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                fill="currentColor"
                className="bi bi-layers m-auto text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
              </svg>
            }
          />
          {/* https://icons.getbootstrap.com/icons/terminal/ のCopy HTMLでコピーしたものをsvg propsに渡す(class => classNameに変更する必要あり) */}
          <Item
            title="Easy to Use"
            content="Ready to use with your own content, or customize the source files!"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                fill="currentColor"
                className="bi bi-terminal m-auto text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default index;
