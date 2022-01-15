import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/logo.svg";
import bg from "../public/bg.svg";
import * as waxjs from "@waxio/waxjs/dist";
import loginButton from "../public/loginButton.png";
import CB from "./app";

// const rpc = new JsonRpc("https://wax.greymass.com", { fetch });
const wax = new waxjs.WaxJS({
  rpcEndpoint: "https://wax.greymass.com",
  tryAutoLogin: true,
});

export default function Home() {
  const [account, setAccount] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const openLoginModal = async () => {
    const userAccount = await wax.login();
    console.log("logged in user", userAccount);
    setLoggedIn(true);
    setAccount(userAccount);
  };
  console.log(loggedIn);
  const renderLogin = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Cosmic Bots</title>
          <meta name="description" content="Farm tokens with cosmic bots" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Image src={logo} alt="logo" className={styles.logo} />
          <button
            src={loginButton}
            alt="logo"
            onClick={openLoginModal}
            className={styles.Button}
          >
            LOGIN
          </button>
        </main>
      </div>
    );
  };

  const renderGame = () => {
    return (
      <div>
        <CB account={account} />
      </div>
    );
  };

  return <div>{loggedIn ? renderGame() : renderLogin()}</div>;
}
