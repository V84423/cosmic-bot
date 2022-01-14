import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/logo.svg";
import bg from "../public/bg.svg";
import { JsonRpc } from "eosjs";
import { UALProvider, withUAL } from "ual-reactjs-renderer";
import { Anchor } from "ual-anchor";
import { Wax } from "@eosdacio/ual-wax";
import loginButton from "../public/loginButton.png";

// const rpc = new JsonRpc("https://wax.greymass.com", { fetch });
const rpc = new JsonRpc("https://testnet.wax.eosdetroit.io", { fetch });

const MyUALConsumer = withUAL(Home);

export default MyUALConsumer;

function Home({ ual }) {
  const openLoginModal = () => {
    if (!ual.activeUser) {
      ual.showModal();
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cosmic Bots</title>
        <meta name="description" content="Farm tokens with cosmic bots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <Image
          src={loginButton}
          alt="logo"
          onClick={openLoginModal}
          className={styles.loginButton}
        />
      </main>
    </div>
  );
}
