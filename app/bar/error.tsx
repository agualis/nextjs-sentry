'use client'

import { captureException } from '@sentry/nextjs'
import { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {

  useEffect(() => {
    console.log('Capturing error in Error Boundary')
    captureException(error, {level: 'fatal', extra: {foo: 'bar'}})

  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div>
    <h2>☹️ Something went wrong in bar</h2>
    <p>{error?.message}</p>
  </div>
  </main>
)
}