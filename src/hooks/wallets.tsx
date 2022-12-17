import React, { createContext, useState, useContext } from "react";

import { Wallet, ResponseWallets, StateApp } from '../models/wallet';
import axios, { AxiosError } from "axios";


export interface AppContext  {
  W: StateApp;
  HandleChangeChoose: (f:string) => void;
  HandleChangeResult: (f:number) => void;
}



const WalletContext = createContext<AppContext | null>(null);


export const useWallet = () => {return useContext(WalletContext)};




type Props = {
  children: JSX.Element
}

export const WalletProvider = ({ children }: Props) => {

  const [W, setWallet] = React.useState<StateApp>({ Error: '', Loading: false, Wallets: [] ,choose:'',result:0})

  // const {}=useWallet()
  
  const HandleChangeChoose = (event:string):void => {
    setWallet({ Error: '', Loading: false, Wallets: W.Wallets ,choose:event,result:0});
  };
  const HandleChangeResult = (event:number):void => {
    setWallet({ Error: '', Loading: false, Wallets: W.Wallets ,choose:W.choose,result:event});
  };


  async function fetchWallet() {
    try {
      setWallet({ Error: '', Loading: true, Wallets: [] ,choose:'',result:0})
      const response = await axios.get<ResponseWallets>('https://www.cbr-xml-daily.ru/daily_json.js')
      let sa: StateApp = { Error: '', Loading: false, Wallets: [] ,choose:'EUR',result:0}
      for (const [key, value] of Object.entries(response.data.Valute)) {
        sa.Wallets.push(value)
      }
      setWallet(sa)
    } catch (e) {
      const error = e as AxiosError
      setWallet({ Error: error.message, Loading: false, Wallets: [] ,choose:'',result:0})
    }
  }

  React.useEffect(() => {
    fetchWallet()
  }, [])

  return (
    <WalletContext.Provider value={{ W,HandleChangeChoose,HandleChangeResult }} >
      {children}
    </WalletContext.Provider>
  )

}