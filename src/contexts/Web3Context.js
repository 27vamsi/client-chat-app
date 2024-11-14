import React, { createContext, useState, useEffect } from "react";
import { getWeb3, getChatContract } from "../web3";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [chatContract, setChatContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const chatContractInstance = await getChatContract();
      setChatContract(chatContractInstance);
    };

    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={{ account, chatContract }}>
      {children}
    </Web3Context.Provider>
  );
};
