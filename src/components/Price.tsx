import { useEffect, useRef, useState } from "react";

export default function Price({ value }: { value: string }) {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    setBlink(true);

    setTimeout(() => {
      setBlink(false);
    }, 300);
  }, [value])

  return (
    <>
      Price: <span className={blink ? "text-green-500 animate-blinking" : "text-gray-500 "}>${value}</span>
    </>
  );
}
