import React, { useState } from "react";
import NavigationBar from "../Header/Navigationbar";
import { connectWallet } from "../../Model/Wallet/ConnectDisconnectWallet";
import { getAccount } from "../../Model/Wallet/getWalletAddress";
import { sendTransection } from "../../Model/Wallet/sendTransection";
import { Buffer } from 'buffer';
import { getBalance } from "../../Model/Wallet/checkBalance";


let accounts = [];
const Home = () => {
  const [walletaddress, setWalletaddress] = useState("");
  const [currentBalance, setBalance] = useState(0);
  //   const getBalance = async () => {
  //     const balance = await web3.eth.getBalance(accounts[0]);
  //     return balance;
  //   };

  function connect() {
    window.Buffer = Buffer;
    connectWallet();
    try {
      getAccount().then((res) => {
        setWalletaddress(res);

        // getBalance().then((res) => setBalance(res));
      });
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 13 ~ connect ~ error", error);
    }
  }

  function sendeth() {
    window.Buffer = Buffer;
    sendTransection();
  }

  function getbalance() {
    getBalance();
  }

  return (
    <>
      <NavigationBar />
      <div className="container" style={{ marginTop: "50px" }}>
        <h2>Home</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            connect();
          }}
        >
          Connect Wallet
        </button>
        &nbsp;
        <button
          className="btn btn-dark"
          onClick={() => {
            sendeth();
          }}
        >
          Send ETH.
        </button>
        &nbsp;
        <button
          className="btn btn-danger"
          onClick={() => {
            getbalance();
          }}
        >
          Get Balance
        </button>
        <p>{walletaddress}</p>
      </div>
    </>
  );
};

export default Home;
