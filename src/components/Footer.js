import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Interiöra</h1>
                    <p>Minimalism när den är som bäst</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Produkter</FooterLinkTitle>
                    <FooterLink to="/kategori/bord">Bord</FooterLink>
                    <FooterLink to="/kategori/dekoration">Dekoration</FooterLink>
                    <FooterLink to="/kategori/fatoljer">Fåtöljer</FooterLink>
                    <FooterLink to="/kategori/lampor">Lampor</FooterLink>
                    <FooterLink to="/kategori/matsalsgrupper">Matsalsgrupper</FooterLink>
                    <FooterLink to="/kategori/stolar">Stolar</FooterLink>
                    <FooterLink to="/kategori/soffor">Soffor</FooterLink>
                    <FooterLink to="/kategori/sangar">Sängar</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Vilka är vi</FooterLinkTitle>
                    <FooterLink to="/kontakta-oss">Kontakta oss</FooterLink>
                    <FooterLink to="/om-interiora">Om Interiöra</FooterLink>
                    <FooterLink to="/vara-butiker">Våra butiker</FooterLink>
                    <FooterLink to="/karriar">Karriär</FooterLink>
                    <FooterLink to="/vanliga-fragor">Vanliga frågor</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Om webbplatsen</FooterLinkTitle>
                    <FooterLink to="/integritetspolicy">Integritetspolicy</FooterLink>
                    <FooterLink to="/om-cookies">Om cookies</FooterLink>
                    <FooterLink to="/anvandarvillkor">Användarvillkor</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) /2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #fff;
    background: #877D70;
    
    @media screen and (max-width: 500px) {
        padding: 0;
        grid-template-columns: repeat(1fr);
        height: 1234px;
    }
`
const FooterDesc = styled.div`
    padding: 0 2rem;
    
    h1 {
        font-family: 'Poppins';
        font-weight: 0;
        margin-bottom: 3rem;
        color: #fff;
    }

    @media screen and (max-width: 400px) {
    padding: 1rem;
}
`
const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinkTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 16px;
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #fff;

    &:hover {
        color: #373737;
        transition: 0.3s ease;
    }
`

