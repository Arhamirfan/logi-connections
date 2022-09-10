import Web3 from "web3";
import { Buffer } from 'buffer';

export const sendTransection = () => {
  window.Buffer = Buffer;
  
    let accounts = [];
    let amount = Web3.utils.toWei(0.01, "ether");
  window.ethereum
    .request({
      method: "eth_sendTransaction",
      params: [
        {
          from: accounts[0],
          to: "0xd486bA9998DA2d69CfcdCAf4cCe50Fdd99F77c71",
          value: amount,
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
};
