"use client";

import { useState } from "react";

export default function Foo() {

  const [err, setErr] = useState(false);

  if (err) {
    throw new Error("asdf");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    <button
    type='button'
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    onClick={() => {
        setErr(true);
      }}>Click to throw error</button>
      If you can see this the error did not throw
    </div>
    </main>
  )
}
