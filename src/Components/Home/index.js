import React, { useState } from "react";
import NavigationBar from "../Header/Navigationbar";
import { connectWallet } from "../../Model/Wallet/ConnectDisconnectWallet";
import { getAccount } from "../../Model/Wallet/getWalletAddress";
import { sendTransection } from "../../Model/Wallet/sendTransection";
import { Buffer } from "buffer";
import { getBalance } from "../../Model/Wallet/checkBalance";
import { useDispatch, useSelector } from "react-redux";
import { balance, connectwallet } from "../../Model/Store/Actions";

let accounts = [];
const Home = () => {
  const [walletaddress, setWalletaddress] = useState("");
  const [currentBalance, setBalance] = useState(0);
  //   const getBalance = async () => {
  //     const balance = await web3.eth.getBalance(accounts[0]);
  //     return balance;
  //   };

  const myState = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  let connect = async () => {
    window.Buffer = Buffer;
    //let connectedMetaMaskWalletAddress = await connectWallet();
    let connectedWAlletAddress = await dispatch(connectWallet());
    console.log(
      "🚀 ~ file: index.js ~ line 21 ~ connect ~ connectedMetaMaskWalletAddress",
      connectedWAlletAddress
    );
    setWalletaddress(connectedWAlletAddress);
  };

  function sendeth() {
    window.Buffer = Buffer;
    sendTransection();
  }

  function getbalance() {
    //getBalance();
    dispatch(balance());
  }

  return (
    <>
      <NavigationBar address={walletaddress} />
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
