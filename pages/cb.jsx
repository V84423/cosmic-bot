import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import bg from "../public/bg.png";
import gs from "../public/Game_Screen.svg";

export default function CB() {
  return (
    <div>
      <Head>
        <title>Home | Cosmic Bots</title>
        <meta name="description" content="Farm tokens with cosmic bots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Image
          src={gs}
          alt="game screen"
          style={{ marginTop: 20 }}
          className="mt-3"
        />
      </main>
    </div>
  );
}
