import React from "react";
import styles from "./style.module.css";
import classnames from "classnames";

type Props = {
  isImageRight: boolean;
  imagePath: string;
  content: string;
  title: string;
};

const ImageShowcase: React.FC<Props> = ({
  isImageRight,
  imagePath,
  content,
  title,
}) => {
  return (
    <div className="row g-0">
      <div
        className={classnames(
          styles["showcase-img"],
          "col-lg-6",
          { "order-lg-2": isImageRight },
          "text-white"
        )}
        style={{ backgroundImage: `url("${imagePath}")` }}
      />
      <div
        className={classnames(
          styles["showcase-text"],
          "col-lg-6",
          { "order-lg-1": isImageRight },
          "my-auto "
        )}
      >
        <h2>{title}</h2>
        <p className="lead mb-0">{content}</p>
      </div>
    </div>
  );
};

function index() {
  return (
    <section className={styles.showcase}>
      <h2 className="text-center my-5">サークルでの制作物一覧</h2>
      <div className="container-fluid p-0">
        <ImageShowcase
          isImageRight
          imagePath="/img/wantedly.png"
          title="Wantedlyの求人情報を全文検索できるサービス"
          content="Wantedlyの求人検索が恐らく全文検索に対応しておらず、求人ページの本文中には検索に使用したキーワードがあるのにも関わらずヒットしないことが多々あったので、求人情報をスクレイピングしてCSVデータに保存し、全文検索ができるようになっています。
          求人閲覧数、求人の投稿日、求人エントリー数、会社設立日、会社人数などでソートする機能やページング機能、検索ワードのAND検索、OR検索なども実装しています。"
        />
        <ImageShowcase
          isImageRight={false}
          imagePath="/img/sumo.png"
          title="スーモの物件一覧を地図にマッピングするサービス"
          content="不動産サイトであるスーモの検索結果一覧をスクレイピングし、GoogleMapAPIをもとに物件の位置情報を推定してマップ上にピンを立てることで、検索結果一覧ページでは確認しづらい位置に関する情報を視覚的に理解する助けとなるサービスです。
          機能としては、指定した位置から指定した半径内の物件のみピンを立てるフィルタリング機能を実装しており、新しい土地への引っ越しの際など土地勘がわからない場合でも、最適な物件選びをサポートすることが出来ます。
          "
        />
        <ImageShowcase
          isImageRight
          imagePath="/img/deepl.png"
          title="Youtubeで生成される英語字幕の和訳精度改善"
          content="Youtubeの機能で自動生成された英語字幕を、Youtubeに内蔵されている日本語翻訳機能を利用して翻訳すると、文章単位ではなく単語単位で翻訳されてしまうことが原因でテキストを正しく翻訳できず理解の難しい訳文になってしまう問題を解決するために開発しました。"
        />
        <ImageShowcase
          isImageRight={false}
          imagePath="/img/news.png"
          title="Discordニュース配信Bot"
          content="Discordを通じてITmediaのニュースの自動取得、検索、登録したキーワードに関連したニュースを購読することができます。
          ITmediaのRSSをスクレイピングして出力したCSVファイルを利用して機能を実装しています。
          検索にはJavaScriptライブラリであるFuse.jsを使用しており、検索エンジンでの検索のようなキーワードに類似したニュースの取得にも対応しています。
          "
        />
        <ImageShowcase
          isImageRight
          imagePath="/img/fusen.png"
          title="付箋型SNSサイト"
          content="付箋のような見た目をした記事を投稿できるSNSサイトです。
          UIにマテリアルデザインを採用しており、操作性の高いアプリケーションライクな動作を実現しています。
          "
        />
        <ImageShowcase
          isImageRight={false}
          imagePath="/img/discord-clone.png"
          title="Discordクローンアプリ"
          content="複数人での音声通話、チャットの送信、送信済みチャットの編集 削除、カテゴリ、チャンネルの作成、画像送信機能、DM機能、認証機能（ログイン等）、画像のトリミングなどが出来ます。
          フロントエンドもバックエンドも全てTypeScriptを使用しておりフロントはVue.js、API開発にGraphQL、データベースにMongoDBを使用しています。"
        />
        <ImageShowcase
          isImageRight
          imagePath="/img/chatapp.png"
          title="チャットアプリ"
          content="チャンネル付きのチャットアプリです。
          主な機能として、チャンネルごとに、独立してチャットを行うことができますUIはBootstrapを用いて統一感を出してます。
          "
        />
        <ImageShowcase
          isImageRight={false}
          imagePath="/img/face.png"
          title="顔認証IoTデバイス"
          content="ラズベリーパイを使った自動顔認証IoTデバイスです。
          OpenCVのカスケード分類器を用いて人の顔がカメラ内に入ると自動で撮影してPythonの顔検出ライブラリで顔検出後、ディープラーニングで人物検証を行い結果をLEDの発光で返します。"
        />
        <ImageShowcase
          isImageRight
          imagePath="/img/udemy.png"
          title="UdemyにDeepLで自動和訳した日本語字幕を表示するChrome拡張機能"
          content="翻訳済み字幕データを動画の再生時間と同期して表示する拡張機能です。
          Udemyの動画を再生する際にVideo要素を監視して、再生時間の変更に応じて適切な日本語字幕をレンダリングすることで実現しています。"
        />
      </div>
    </section>
  );
}

export default index;
