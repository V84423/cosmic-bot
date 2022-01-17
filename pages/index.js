import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/logo.svg";
import bg from "../public/bg.svg";
import { connect } from "react-redux";
import { setUser, setLoggedIn } from "../redux/actions/main";
import * as waxjs from "@waxio/waxjs/dist";
import loginButton from "../public/loginButton.png";
import CB from "./app";

// const rpc = new JsonRpc("https://wax.greymass.com", { fetch });
const wax = new waxjs.WaxJS({
  rpcEndpoint: "https://wax.greymass.com",
  tryAutoLogin: true,
});
function Home(props) {
  const { user, setUser } = props;
  const { loggedIn, setLoggedIn } = props;

  const openLoginModal = async () => {
    const userAccount = await wax.login();
    console.log("logged in user", userAccount);
    setLoggedIn(true);
    setUser(userAccount);
  };
  console.log(loggedIn.main.logged);
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
        <CB account={user} />
      </div>
    );
  };

  return <div>{loggedIn.main.logged ? renderGame() : renderLogin()}</div>;
}

const mapStateToProps = (state) => ({
  user: state,
  loggedIn: state,
});

const mapDispatchToProps = {
  setUser: setUser,
  setLoggedIn: setLoggedIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
