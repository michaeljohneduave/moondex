import { useEffect, useRef, useState } from "react";

export default function Price({ price }: { price: string }) {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    setBlink(true);

    setTimeout(() => {
      setBlink(false);
    }, 1000);
  }, [price])

  return (
    <>
      <p className={blink ? "text-gray-500 animate-blinking" : "text-gray-500 "}>Price: ${price}</p>
    </>
  );
}
