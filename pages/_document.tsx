import Document, { Head, Html, Main, NextScript } from 'next/document'
import { GA_ID } from '../lib/gtag'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='canonical' href='https://hrtk92-web.web.app/' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <meta charSet='utf-8' />
          <meta property='og:title' content='HRTK92 - はらたく' />
          <meta property='og:description' content='はらたくのポートフォリオサイトです' />
          <meta property='og:site_name' content='HRTK92' />
          <meta property='og:url' content='https://hrtk92-web.web.app/MySite' />
          <meta property='og:image' content='https://hrtk92-web.web.app/og_image.jpeg' />
          <meta property='og:locale' content='ja_JP' />
          <meta property='og:type' content='website' />
          <meta name='twitter:card' content='summary_large_image' />
          {/* wow.js */}
          <script src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'></script>
          <script>new WOW().init();</script>

          {/* Google Analytics */}
          {GA_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', {
                      page_path: window.location.pathname,
                    });`,
                }}
              />
            </>
          )}
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
