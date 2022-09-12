import { getBalance } from "../../Wallet/checkBalance";
import { connectWallet } from "../../Wallet/ConnectDisconnectWallet";

const initialAddress = "1213213";

const wallet = (state = initialAddress, action) => {
  switch (action.type) {
    case "CONNECT":
      return action.payload;

    default:
      return state;
  }
};

export default wallet;
