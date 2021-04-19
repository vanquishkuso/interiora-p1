import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Interiöra</h1>
                    <p>We strive to create the best experiences for our customers</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/about">Contact</FooterLink>
                    <FooterLink to="/about">Support</FooterLink>
                    <FooterLink to="/about">Destination</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Products</FooterLinkTitle>
                    <FooterLink to="/about">C-Series</FooterLink>
                    <FooterLink to="/about">J-Series</FooterLink>
                    <FooterLink to="/about">WS-Series</FooterLink>
                    <FooterLink to="/about">Nano</FooterLink>
                    <FooterLink to="/about">DOT</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/about">Contact</FooterLink>
                    <FooterLink to="/about">Support</FooterLink>
                    <FooterLink to="/about">Destination</FooterLink>
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
`
const FooterDesc = styled.div`
    padding: 0 2rem;
    
    h1 {
        font-family: 'Poppins';
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
    font-size: 14px;
    margin-bottom: 16px;
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #fff;

    &:hover {
        color: #373737;
        transition: 0.3s ease-out;
    }
`

