export const isBrowser = typeof window !== "undefined";
export const wsInstance = isBrowser ? new WebSocket("wss://stream.binance.com:443/ws") : null;