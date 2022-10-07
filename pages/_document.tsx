import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='canonical' href='https://hrtk92.github.io/MySite/' />
          <link rel='apple-touch-icon' sizes='180x180' href='/MySite/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/MySite/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/MySite/favicon-16x16.png' />
          <meta charSet='utf-8' />
          <meta property='og:title' content='HRTK92 - はらたく' />
          <meta property='og:description' content='はらたくのポートフォリオサイトです' />
          <meta property='og:site_name' content='HRTK92' />
          <meta property='og:url' content='https://hrtk92.github.io/MySite' />
          <meta property='og:image' content='https://hrtk92.github.io/MySite/og_image.jpeg' />
          <meta property='og:locale' content='ja_JP' />
          <meta property='og:type' content='website' />
          <meta name='twitter:card' content='summary_large_image' />

          <script src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'></script>
          <script>new WOW().init();</script>
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
