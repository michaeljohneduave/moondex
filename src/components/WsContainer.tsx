"use client";

import { createContext, useEffect, useRef, useState } from "react";

export type WsContextType = {
  isOpen: boolean;
  socket: WebSocket | null;
};

export const WsContext = createContext<WsContextType | null>(null);

export default function WsProvider({
  list,
  children,
}: {
  list: any;
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("wss://stream.binance.com:443/ws");

    ws.current = socket;

    const open = () => {
      setOpen(true);

      if (ws.current) {
        ws.current.send(
          JSON.stringify({
            method: "SUBSCRIBE",
            params: list.map(
              (symbol: string) => `${symbol.toLowerCase()}usdt@ticker_1h`
            ),
            id: 1,
          })
        );
      }
    };

    socket.onopen = open;

    return () => {
      socket.removeEventListener("open", open);
      socket.close();
    };
  }, []);

  const val = {
    isOpen,
    socket: ws.current,
  };

  return <WsContext.Provider value={val}>{children}</WsContext.Provider>;
}
