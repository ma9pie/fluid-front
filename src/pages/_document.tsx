import { Head, Html, Main, NextScript } from 'next/document';

const URL = 'https://fluid-dev.vercel.app/';
const TITLE = 'Fluid';
const DESCRIPTION = '';
const KEYWORDS = '';
const TWITTER_CARD_IMAGE = '/images/twitter-card.png';
const LOGO_IMAGE = '/icons/favicon-96x96.png';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta name="description" content={DESCRIPTION} />
        <meta charSet="utf-8" />
        <meta name="author" content="" />
        <meta name="image" content={TWITTER_CARD_IMAGE} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={KEYWORDS} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={URL} />
        <link rel="canonical" href={URL} />
        <meta property="og:site_name" content={TITLE} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:image" content={TWITTER_CARD_IMAGE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={URL} />
        <meta name="twitter:site_name" content={TITLE} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:image" content={TWITTER_CARD_IMAGE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:type" content="website" />

        <link rel="icon" type="image/png" href={LOGO_IMAGE} />
        <link rel="shortcut icon" type="image/x-icon" href={LOGO_IMAGE} />

        {/* https://www.favicon-generator.org/ */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
