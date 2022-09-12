import { Buffer } from "buffer";

export const connectWallet = async () => {
  try {
    window.Buffer = Buffer;
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");

      const requesting = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (requesting) {
        //console.log(window.ethereum);
        // window.ethereum.on("accountsChanged", (accounts) => {
        //   console.log(
        //     "🚀 ~ file: ConnectDisconnectWallet.js ~ line 15 ~ connectWal ~ accounts",
        //     accounts
        //   );
        // });
        console.log(requesting);
        return requesting[0];
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
