import '../styles/globals.css'
import '../styles/header.css'
import '../styles/footer.css'
import '../styles/profileImg.css'
import '../styles/bundle.css'
import SiteLayout from '../components/siteLayout'

import Head from 'next/head'


 function MyApp({ Component, pageProps }) {
  return <>
  <SiteLayout>
      <Head>
      <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>

      <link rel="stylesheet" href="../styles/header.css"/>
      <link rel="stylesheet" href="../styles/footer.css"/>
      <link rel="stylesheet" href="../styles/profileImg.css"/>

      </Head>

    <Component {...pageProps} />
  </SiteLayout>
  </>
  
}

export default MyApp
