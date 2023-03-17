import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MLB Teams</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/mlb.png&amp;w=64&amp;h=64&amp;scale=crop&amp;cquality=40&amp;location=origin"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
