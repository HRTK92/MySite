import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='canonical' href='https://hrtk92-developer.web.app/' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <meta charSet='utf-8' />
          <meta property='og:title' content='HRTK92 - はらたく' />
          <meta property='og:description' content='' />
          <meta property='og:site_name' content='HRTK92' />
          <meta property='og:url' content='https://hrtk92-developer.web.app/MySite' />
          <meta property='og:image' content='https://hrtk92-developer.web.app/og_image.jpeg' />
          <meta property='og:locale' content='ja_JP' />
          <meta property='og:type' content='website' />
          <meta name='twitter:card' content='summary_large_image' />

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
