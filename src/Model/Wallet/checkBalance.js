import Web3 from "web3";
import { Buffer } from "buffer";

// export const getBalance = async () => {
//   window.Buffer = Buffer;
//   let web3 = new Web3(window.ethereum);
//   let balance = web3.eth.getBalance(
//     "0x7f660805fcECCe577e94940AC5b6b9ddbAf579e8"
//   );
//   const etherBalance = await web3.utils.fromWei(String(balance), "ether");
//   const finalBalance = etherBalance.substring(0, 6);
//   console.log('ether balance: ' + etherBalance );
//   console.log('ether balance: ' + finalBalance);
// };

export const getBalance = async () => {
  window.Buffer = Buffer;
  try {
    let web3 = new Web3(window.ethereum);
    const balance = await web3.eth
      .getBalance("0x7f660805fcECCe577e94940AC5b6b9ddbAf579e8")
      .then((res) => {
        console.log(res);
        let newbal = web3.utils.fromWei(String(res), "ether");
        console.log(newbal);
        return newbal;
      });
  } catch (error) {
    console.log(error);
  }
};
