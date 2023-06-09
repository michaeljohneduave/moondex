"use client";

import { wsInstance } from "@/lib/ws";
import { useContext, useEffect, useState } from "react";
import Price from "./Price";
import { WsContext, WsContextType } from "./WsContainer";
import Change from "./Change";

export type TokenType = {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change: number;
};

export default function Token(props: TokenType) {
  const [price, setPrice] = useState(props.price);
  const [change, setChange] = useState(props.change);
  const ws: WsContextType | null = useContext(WsContext);
  const ticker = `${props.symbol}USDT`;

  useEffect(() => {
    const message = (msg: MessageEvent<any>) => {
      const data = JSON.parse(msg.data);
      if (ticker === data.s) {
        setPrice(parseFloat(data.c));
        setChange(parseFloat(data.P));
      }
    };

    if (ws?.isOpen && ws.socket) {
      ws.socket.addEventListener("message", message);
    }

    return () => {
      ws?.socket?.removeEventListener("message", message);
    };
  }, [ws?.isOpen, ws?.socket]);

  return (
    <div className="w-full h-full bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold">
        {props.name} ({props.symbol})
      </h2>
      <Price value={price.toFixed(4)} />
      <Change value={change} />
    </div>
  );
}
