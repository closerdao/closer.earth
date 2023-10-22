import "../styles/globals.css";
import "../public/urbanist/stylesheet.css" 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { useRouter } from "next/router";




function MyApp({ Component, pageProps }) {

  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Closer</title>
        <meta name="description" content="Pioneering the Future of Regenerative Living Through Technology." />
      </Head>


      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
