
import { Buffer } from 'buffer';


export const connectWallet = () => {
  try {
    window.Buffer = Buffer;
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");

      const requesting = window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (requesting) {
        //console.log(requesting);
      } else {
        console.log("not requesting");
      }
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: ConnectWallet.js ~ line 16 ~ connectWal ~ error",
      error
    );
  }
};

export const disconnectWallet = () => {
  const requesting = window.ethereum.request({ method: "disconnect" });
  console.log(requesting);
};
