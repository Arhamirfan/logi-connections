import { getBalance } from "../../Wallet/checkBalance";
import { connectWallet } from "../../Wallet/ConnectDisconnectWallet";

const initialAddress = "";

const wallet = (state = initialAddress, action) => {
  switch (action.type) {
    case "CONNECT":
      state = connectWallet();
      return state;
    case "CHECKBALANCE":
      state = getBalance();
      return state;

    default:
      return state;
  }
};

export default wallet;
