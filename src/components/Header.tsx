import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white py-5 px-10 flex flex-row items-center">
      <Image className="mr-2" src="/pepemoon.png" alt="To the mooon" width={40} height={40} />
      <h1 className="text-2xl font-bold">Moondex</h1>
      <button className="bg-white text-blue-500 py-2 px-4 rounded ml-auto">
        Sign In
      </button>
    </header>
  );
}
