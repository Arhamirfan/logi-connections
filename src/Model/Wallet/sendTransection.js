import Web3 from "web3";

export const sendTransection = () => {
  let web3 = new Web3(window.ethereum);
  let balance = web3.eth.getBalance(
    "0x7f660805fcECCe577e94940AC5b6b9ddbAf579e8"
  );
  alert(balance);
  //   let accounts = [];
  //   let amount = Web3.utils.toWei(0.01, "ether");
  // window.ethereum
  //   .request({
  //     method: "eth_sendTransaction",
  //     params: [
  //       {
  //         from: accounts[0],
  //         to: "0x2f318C334780961FB129D2a6c30D0763d9a5C970",
  //         value: "0x29a2241af62c0000",
  //         gasPrice: "0x09184e72a000",
  //         gas: "0x2710",
  //       },
  //     ],
  //   })
  //   .then((txHash) => console.log(txHash))
  //   .catch((error) => console.error);
};
