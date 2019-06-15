import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import scrollToComponent from "react-scroll-to-component"

const Wrapper = styled.div`
  transition: all 0.5 ease;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 22.5px 0 60px 0;
  position: relative;
  height: 40px;

  @media all and (max-width: 980px) {
    background: ${props => (props.isChecked ? " #f7a090" : "transparent")};
  }
`
const ToggleStyle = css`
  width: 100%;
  height: 5px;
  background: #fff;
  margin: 4px auto;
  transition: all 0.3s;
  backface-visibility: hidden;
`

const ToggleOne = styled.div`
  ${ToggleStyle}

  transform: ${props => props.isChecked && "rotate(45deg) translate(5px, 5px)"}
`
const ToggleTwo = styled.div`
  ${ToggleStyle}
  opacity: ${props => props.isChecked && "0"}
`
const ToggleThree = styled.div`
  ${ToggleStyle}
    transform: ${props =>
      props.isChecked && "rotate(-45deg) translate(8px, -8px)"}
`

const Logo = styled.p`
  font-size: 30px;
  color: #ffffff;
  font-family: "Montserrat-Bold";
  margin: 0;
  padding-left: 2px;

  @media all and (max-width: 1280px) {
    padding-left: 15px;
  }
`

const Nav = styled.ul`
  width: 620px;
  display: flex;
  justify-content: space-evenly;
  margin: 8.5px 0 0 0;
  padding: 0 8px 0 0;

  @media all and (max-width: 1280px) {
    padding: 0 15px 0 0;
    width: 500px;
  }

  @media all and (max-width: 980px) {
    background: #f7a090;
    position: absolute;
    width: 100%;
    top: 65px;
    opacity: ${props => (props.isChecked ? "1" : "0")};
    max-height: ${props => (props.isChecked ? "280px" : "0")};
    overflow: hidden;
    transition: all 0.5s ease;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
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

  @media all and (max-width: 980px) {
    font-size: 24px;
  }
`

const NavItem = styled.li`
  list-style-type: none;

  &:hover {
    cursor: pointer;
  }

  &:hover ${NavLink} {
    color: #fce38a;

    ::after {
      content: "";
      display: block;
      width: calc(100% - 1px);
      border-top: 3px solid #fce38a;
      margin-top: 10px;
    }
  }

  @media all and (max-width: 980px) {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid #fce38a;;
    }

    &:hover ${NavLink} {
        ::after {
          content: none;
        }
    }
`

const Image = styled.img`
  color: red;
`

const Label = styled.label`
  width: 28px;
  height: 30px;
  padding-right: 15px;
  display: none;

  @media all and (max-width: 980px) {
    display: block;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover > div {
    background: #fce38a;
  }
`

const Input = styled.input`
  display: none;
`

const links = ["about", "service", "work", "blog", "contact"]

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  handleCheckBox = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  render() {
    const { shopIconSrc, searchIconSrc } = this.props
    return (
      <Wrapper isChecked={this.state.checked}>
        <Logo>MoGo</Logo>
        <Label htmlFor="toggle">
          <ToggleOne isChecked={this.state.checked} />
          <ToggleTwo isChecked={this.state.checked} />
          <ToggleThree isChecked={this.state.checked} />
        </Label>
        <Input type="checkbox" id="toggle" onClick={this.handleCheckBox} />
        <Nav isChecked={this.state.checked}>
          {links.map((link, id) => (
            <NavItem key={id}>
              <NavLink
                onClick={() =>
                  scrollToComponent(this.props.references[link], {
                    offset: 0,
                    align: "top",
                    duration: 1500,
                  })
                }
              >
                {link}
              </NavLink>
            </NavItem>
          ))}
          <NavItem>
            <Image src={shopIconSrc} width={18} height={15} />
          </NavItem>
          <NavItem>
            <Image src={searchIconSrc} width={18} height={18} />
          </NavItem>
        </Nav>
      </Wrapper>
    )
  }
}

export default Header
