import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/enl7wdt.css" />
        </Head>

        <body>
          <Main />
          <NextScript />  
        </body>
      </Html>
    )
  }
}