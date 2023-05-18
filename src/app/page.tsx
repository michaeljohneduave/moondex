import { Suspense } from "react";
import Header from "@/components/Header";
import TokenList from "@/components/TokenList";

export default function Home() {
  const arr = new Array(100).fill(0);
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-row flex-wrap m-5">
        <Suspense fallback={<div>Loading..</div>}>
          {/* @ts-expect-error Async Server Component */}
          <TokenList />
        </Suspense>
      </div>
    </main>
  );
}
