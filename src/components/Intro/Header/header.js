import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 22.5px 0 0 0;
`

const Logo = styled.span`
  font-size: 30px;
  color: #ffffff;
  font-family: "Montserrat-Bold";
  margin: 0;
`

const Nav = styled.ul`
  width: 551px;
  display: flex;
  justify-content: space-between;
  margin-top: 15.5px;
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
      border: 1.5px solid #fce38a;
      margin-top: 7px;
    }
  }
`

const Image = styled.img`
  color: red;
`

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
      const links = ["about", "service", "work", "blog", "contact"]
      return (
        <Wrapper>
          <Logo>MoGo</Logo>
          <Nav>
            {links.map(link => {
              return (
                <NavItem>
                  <NavLink>{link}</NavLink>
                </NavItem>
              )
            })}
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
