const CMC_API_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/";

export type CMCRequest = {
  url: string;
  method: Method;
};

export default async function cmcRequest(opts: CMCRequest) {
  const headers = new Headers();

  headers.set("X-CMC_PRO_API_KEY", process.env.CMC_API_KEY || "");

  const response = await fetch(opts.url, {
    method: opts.method,
    headers,
  });

  return await response.json();
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
