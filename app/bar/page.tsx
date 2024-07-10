"use client";


export default function Bar() {

 useBar()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      If you can see this the error did not throw
    </div>
    </main>
  )
}

function useBar() {
  setTimeout(()=> { throw new Error('Explode')}, 1000)
}
