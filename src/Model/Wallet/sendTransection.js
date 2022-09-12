import Web3 from "web3";
import { Buffer } from "buffer";
import { getAccount } from "./getWalletAddress";

export const sendTransection = () => {
  window.Buffer = Buffer;

  try {
    getAccount().then((res) => {
      let accounts = res;
      console.log(accounts);
      let amount = Web3.utils.toWei(String(0.01), "ether");
      window.ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: accounts,
              to: "0xd486bA9998DA2d69CfcdCAf4cCe50Fdd99F77c71",
              value: amount,
            },
          ],
        })
        .then((txHash) => {
          console.log("successfully send. generating transaction address");
          return txHash;
        })
        .catch((error) => {
          console.log(
            "🚀 ~ file: sendTransection.js ~ line 32 ~ getAccount ~ error",
            error
          );
          return error;
        });
    });
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 13 ~ connect ~ error", error);
  }
};
