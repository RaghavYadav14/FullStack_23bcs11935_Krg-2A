import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center p-6 space-y-4 bg-gray-100 rounded-2xl shadow-md w-64">
        <h1 className="text-2xl font-bold">Counter: {count}</h1>

        {count === 10 && (
          <p className="text-red-500 font-medium">Max limit reached</p>
        )}

        <div className="flex space-x-3">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
            disabled={count === 0}
          >
            -
          </button>

          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:opacity-50"
            disabled={count === 10}
          >
            +
          </button>

          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
