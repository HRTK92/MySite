import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider, Text } from '@nextui-org/react'
import NProgress from 'nprogress'
import '../public/nprogress.css'
import 'animate.css'

const theme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const handleStart = (url: any) => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  //loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <>
      <NextUIProvider theme={theme}>
        {loading ? <></> : <Component {...pageProps} />}
      </NextUIProvider>
    </>
  )
}

export default MyApp
