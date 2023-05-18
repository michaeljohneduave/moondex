"use client";

import { wsInstance } from "@/lib/ws";
import { useEffect, useState } from "react";

export default function WsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const open = () => {
      console.log("Open");
      wsInstance?.send(
        JSON.stringify({
          method: "SUBSCRIBE",
          params: ["maticusdt@kline_1m"],
          id: 1,
        })
      );
    };
    const close = () => {
      console.log("WebSocket connection closed");
    };
    const messsage = (msg: MessageEvent<any>) => {
      console.log(msg.data);
    };
    const error = (err: Event) => {
      console.log(`WebSocket error: ${err}`);
    };

    if (wsInstance) {
      wsInstance.onopen = open;
      wsInstance.onerror = error;
      wsInstance.onclose = close;
    }


    return () => {
      wsInstance?.removeEventListener("open", open);
      wsInstance?.removeEventListener("error", error);
      wsInstance?.removeEventListener("close", close);
    };
  }, []);

  return <div>{children}</div>;
}
