import { getMainList } from "@/lib/cmc";
import Token from "./Token";
import WsContainer from "./WsContainer";

export default async function TokenList() {
  const { data } = await getMainList();
  const list = data.slice(0, 50);

  return (
    <WsContainer list={list.map((item: any) => item.symbol)}>
      <div className="flex flex-row flex-wrap">
        {list.map((item: any) => {
          return (
            <div className="w-[300px] h-[150px] m-2">
              <Token
                key={item.id}
                id={item.id}
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
