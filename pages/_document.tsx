import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/MySite/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/MySite/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/MySite/favicon-16x16.png"
          />
          <meta charSet="utf-8" />
          <meta property="og:title" content="HRTK92 - はらたく " />
          <meta
            property="og:description"
            content="はらたくのポートフォリオサイトです"
          />
          <meta property="og:site_name" content="サイト名" />
          <meta property="og:url" content="https://hrtk92.github.io/MySite" />
          <meta property="og:image" content="/MySite/og_image.jpeg" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image"></meta>
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
