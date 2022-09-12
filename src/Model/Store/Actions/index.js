export const connectwallet = (address) => {
  return {
    type: "CONNECT",
    payload: address,
  };
};

export const balance = () => {
  return {
    type: "CHECKBALANCE",
  };
};
