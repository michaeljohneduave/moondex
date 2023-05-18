import { useEffect, useRef, useState } from "react";

export default function Price({ price }: { price: string }) {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    setBlink(true);

    setTimeout(() => {
      setBlink(false);
    }, 300);
  }, [price])

  return (
    <>
      Price: <span className={blink ? "text-green-500 animate-blinking" : "text-gray-500 "}>${price}</span>
    </>
  );
}
