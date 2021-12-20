import react from "react";

import SiteFooter from './siteFooter'
import SiteHeader from './siteHeader'

//This just returns the header and footer div's which 
//wrap around all the content
const SiteLayout = ({children}) => {
    return (
        <>
            <SiteHeader />

                {children}

            <SiteFooter />
        </>
    )
}

export default SiteLayout
