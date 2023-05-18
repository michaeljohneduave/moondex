"use client";

import { wsInstance } from "@/lib/ws";
import { useEffect, useState } from "react";
import Price from "./Price";

export type TokenType = {
  name: string;
  symbol: string;
  price: number;
  change: number;
};

export default function Token(props: TokenType) {
  const [price, setPrice] = useState(props.price);
  useEffect(() => {
    const message = (msg: MessageEvent<any>) => {
      const data = JSON.parse(msg.data);
      const ticker = `${props.symbol}USDT`;

      console.log(ticker, data);
      if (ticker === data.s) {
        setPrice(parseFloat(data.k.c));
      }
    };

    if (wsInstance) {
      wsInstance.onmessage = message;
    }

    return () => {
      wsInstance?.removeEventListener("message", message);
    };
  }, []);

  return (
    <div className="w-full h-full bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold">
        {props.name} ({props.symbol})
      </h2>
      <Price price={price.toFixed(4)} />
      <p
        className={`text-sm ${
          props.change < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {props.change < 0 ? "↓" : "↑"} {Math.abs(props.change)}%
      </p>
    </div>
  );
}
