import { getMainList } from "@/lib/cmc";
import Token from "./Token";
import WsContainer from "./WsContainer";

export default async function TokenList() {
  const { data } = await getMainList();
  return (
    <WsContainer>
      <div className="flex flex-row flex-wrap">
        {data.slice(0, 10).map((item: any) => {
          return (
            <div className="w-[300px] h-[150px] m-2">
              <Token
                key={item.id}
                name={item.name}
                symbol={item.symbol}
                change={item.quote.USD.percent_change_24h}
                price={item.quote.USD.price}
              />
            </div>
          );
        })}
      </div>
    </WsContainer>
  );
}
