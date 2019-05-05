import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
const activeClassName = "nav-item-active"
//
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 128px;
  margin-bottom: 101px;
  padding: 28px 0 0 0;
`
//  font-family: "Montserrat"; 18.645833vw 0 18.8541667vw
const Logo = styled.span`
  font-size: 30px;
  color: #ffffff;
  font-family: "Montserrat-Bold";
  font-weight: 700;
`

const Nav = styled.ul`
  width: 551px;
  display: flex;
  justify-content: space-between;
`

const NavItem = styled.li`
  list-style-type: none;

  &:hover {
    cursor: pointer;
  }
`

//font-family: "Montserrat";
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
      border: 1.5px solid #fce38a;
      margin-top: 7px;
    }
  }
`

const Image = styled.img``

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        search: file(relativePath: { eq: "search-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 32) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        shop: file(relativePath: { eq: "shop-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 32) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      console.log(
        data.search.childImageSharp.fluid.src,
        data.shop.childImageSharp.fluid.src
      )
      return (
        <Wrapper>
          <Logo>MoGo</Logo>
          <Nav>
            <NavItem>
              <NavLink to={"/"} activeClassName={activeClassName}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/asd"} activeClassName={activeClassName}>
                Service
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/"} activeClassName={activeClassName}>
                Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/"} activeClassName={activeClassName}>
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/"} activeClassName={activeClassName}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <Image
                src={data.shop.childImageSharp.fluid.src}
                width={18}
                height={15}
              />
            </NavItem>
            <NavItem>
              <Image
                src={data.search.childImageSharp.fluid.src}
                width={18}
                height={18}
              />
            </NavItem>
          </Nav>
        </Wrapper>
      )
    }}
  />
)

export default Header
