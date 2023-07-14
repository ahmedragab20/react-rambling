import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-5 flex justify-center items-center flex-col h-screen gap-4">
      <h1 className="text-3xl font-semibold">Home</h1>
      <p>Count: {count}</p>
      <button
        className="px-4 py-2 bg-blue-50 text-blue-500  rounded-full hover:bg-blue-500 hover:text-blue-50 duration-300 active:scale-95"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
