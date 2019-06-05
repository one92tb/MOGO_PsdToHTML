import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 22.5px 0 0 0;
  position: relative;
  left: -2px;
  height: 100px;
`

const Logo = styled.p`
  font-size: 30px;
  color: #ffffff;
  font-family: "Montserrat-Bold";
  margin: 0;
`

const Nav = styled.ul`
  width: 551px;
  display: flex;
  justify-content: space-between;
  margin: 8.5px 0 0 0;
`

const NavItem = styled.li`
  list-style-type: none;

  &:hover {
    cursor: pointer;
  }
`

const NavLink = styled.a`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat-Bold";
  text-decoration: none;

  :hover {
    color: #fce38a;

    ::after {
      content: "";
      display: block;
      width: calc(100% - 1px);
      border-top: 3px solid #fce38a;
      margin-top: 10px;
    }
  }
`

const Image = styled.img`
  color: red;
`

const links = ["about", "service", "work", "blog", "contact"]
const Header = props => (
  <Wrapper>
    <Logo>MoGo</Logo>
    <Nav>
      {links.map((link, id) => (
        <NavItem key={id}>
          <NavLink>{link}</NavLink>
        </NavItem>
      ))}
      <NavItem>
        <Image src={props.shopIconSrc} width={18} height={15} />
      </NavItem>
      <NavItem>
        <Image src={props.searchIconSrc} width={18} height={18} />
      </NavItem>
    </Nav>
  </Wrapper>
)

export default Header
