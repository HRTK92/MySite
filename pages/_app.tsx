import { useState } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import 'animate.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  return <>{loading ? <></> : <Component {...pageProps} />}</>
}

export default MyApp
