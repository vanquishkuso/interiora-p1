import React, { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import CookieConsent, { Cookies } from "react-cookie-consent"

const Layout = ({ children }) => {

    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <CookieConsent
                location="bottom"
                buttonText="Absolut!"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#373737", height: "270px" }}
                buttonStyle={{ backgroundColor: "#fff", width: "131px", height: "36px", color: "#373737", fontSize: "18px", fontWeight: "bold" }}>Denna webbplatsen använder cookies för att förbättra användarupplevelsen. Vill du veta mer om cookies och hur de används vänligen kolla in vår <a style={{ color: "#877D70", fontWeight: "bold" }} href="/om-cookies">Cookiepolicy</a></CookieConsent>
            <Footer />
        </>

    )
}

export default Layout
