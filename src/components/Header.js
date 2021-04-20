import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { MenuData } from '../data/MenuData'
import { Button } from "./Button"
import { FiShoppingCart, FiSearch } from 'react-icons/fi'

const Header = () => {
  return (
    <Nav>
      <NavLink style={{ fontFamily: 'Poppins', fontSize: '2rem' }} to="/">Interiöra</NavLink>

      <Bars />

      <NavMenu>
        {MenuData.map((item, index) => (
          <NavLink to={item.link} key={index}>{item.title}</NavLink>
        ))}
      </NavMenu>

      <CartWrapper>
        <Search />
        <NavLink to="/varukorgen/">
          <Cart />
        </NavLink>
      </CartWrapper>

      <NavBtn>
        <Button primary="true" round="true" to="/aterforsaljare">
          Köp här
          </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
color: #373737;

@media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  &:hover {
        color: #877D70;
        transition: 0.3s ease;
    }
`

const Bars = styled(FaBars)`
display: none;
color: #373737;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(100%, 95%);
  font-size: 1.8rem;
  cursor: pointer;
}
`

const Search = styled(FiSearch)`
  color: #877D70;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-300%, 95%);
  font-size: 1.8rem;
  cursor: pointer;
}
`

const Cart = styled(FiShoppingCart)`
  color: #877D70;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 95%);
  font-size: 1.8rem;

}
`

const CartWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`