import { useEffect, useState } from "react";

export default function Change({ value }: { value: number }) {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    setBlink(true);

    setTimeout(() => {
      setBlink(false);
    }, 300);
  }, [value]);

  return (
    <>
      <p
        className={`text-sm ${
          value < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {value < 0 ? "↓" : "↑"} {Math.abs(value).toFixed(4)}%
      </p>
    </>
  );
}
