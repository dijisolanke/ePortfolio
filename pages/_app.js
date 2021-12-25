import '../styles/globals.css'
import '../styles/header.css'
import '../styles/footer.css'
import '../styles/profileImg.css'
import '../styles/bundle.css'
import SiteLayout from '../components/siteLayout'
import { StyledEngineProvider } from '@mui/material/styles';


import Head from 'next/head'


 function MyApp({ Component, pageProps }) {
  return <>
  <StyledEngineProvider injectFirst>
    <SiteLayout>

      <Component {...pageProps} />
    </SiteLayout>
    </StyledEngineProvider>
  </>
  
}

export default MyApp
