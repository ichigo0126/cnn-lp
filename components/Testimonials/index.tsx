import React from "react";
import styles from "./style.module.css";
import classnames from "classnames";
import Image from "next/image";

type Props = {
  title: string;
  content: string;
  imagePath: string;
};

const Item: React.FC<Props> = ({ title, content, imagePath }) => {
  return (
    <div className="col-lg-4">
      <div
        className={classnames(
          styles["testimonial-item"],
          "mx-auto",
          "mb-5",
          "mb-lg-0"
        )}
      >
        <Image
          className="img-fluid rounded-circle mb-3"
          src={imagePath}
          alt="..."
          width={192}
          height={192}
        />
        <h5>{title}</h5>
        <p className="font-weight-light mb-0">{content}</p>
      </div>
    </div>
  );
};

function index() {
  return (
    <section
      className={classnames(styles.testimonials, "text-center", "bg-light")}
    >
      <div className="container">
        <h2 className="mb-5">サークル活動の例</h2>
        <div className="row">
          <Item
            title="スクラム開発"
            content="Discordを使用して音声通話やテキストチャットでコミュニケーションを取りながら、スクラムでWebアプリケーションを開発しています"
            imagePath="/img/scrum.jpg"
          />
          <Item
            title="サークル内でプログラミングコンテストの実施"
            content="週に1, 2回集まってLeetcodeのProblemsを解いて競い合ったり教え合ったりしています"
            imagePath="/img/alvaro-reyes-LXx1hwmp67E-unsplash.jpg"
          />
          <Item
            title="LTや勉強会"
            content="サークルメンバーの技術的な取り組みを発表するLT会やトレンドのWeb技術を学ぶ勉強会を行っています"
            imagePath="/img/meeting.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default index;
