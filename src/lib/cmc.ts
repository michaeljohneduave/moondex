import axios, { AxiosRequestConfig, Method } from "axios";

const CMC_API_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/";

export type CMCRequest = {
  url: string;
  method: Method;
};

export default async function cmcRequest(opts: CMCRequest) {
  const response = await axios({
    url: opts.url,
    method: opts.method,
    headers: {
      "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
    }
  });

  return response.data;
}

export async function getMainList() {
  const headers = new Headers();

  headers.set("X-CMC_PRO_API_KEY", process.env.CMC_API_KEY || "");


  const response = await fetch(CMC_API_URL + "latest", {
    method: "GET",
    headers: headers,
  });

  return await response.json();
}
