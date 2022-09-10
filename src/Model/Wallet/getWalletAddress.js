import { Buffer } from 'buffer';

export const getAccount = async () => {
  try {
    window.Buffer = Buffer;
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    console.log(account);
    return account;
  } catch (error) {
    console.log(
      "🚀 ~ file: getWalletAddress.js ~ line 5 ~ getAccount ~ error",
      error
    );
    return null;
  }
};
